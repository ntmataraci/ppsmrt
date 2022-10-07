import { ReactElement, useState } from "react";
import {  allPages, pageIndex, stringList } from "./PageList";
import { useContext } from "react";
import { ContextProvider } from "../functions/Context";
import { defaultContent } from "../modals/defaultContent";
import { defaultState } from "../functions/Context";
import { dataType } from "./modal.types";
const PopupGrid = () => {
  const [visited, setVisited] = useState<number>(0);
  const pageNumber: number[] = [1, 2, 3];
  const contextUse = useContext(ContextProvider);

  const selectModal = (item: any) => {
    contextUse.shallowState.modalName = item;
    const findDefault=defaultContent.find(x=>x.name==item)?.content.slice()
    const cloneDefaultState={...defaultState}
    contextUse.shallowState.content =findDefault
    contextUse.changer?.((prev:dataType) => ({
      ...prev,
      modalName: contextUse.shallowState.modalName,
      content:contextUse.shallowState.content,
      color:cloneDefaultState.color,
      size:cloneDefaultState.size,
      position:cloneDefaultState.position,
      imgUrl:cloneDefaultState.imgUrl,
      logoUrl:cloneDefaultState.logoUrl
    }));
    console.log(contextUse.newVal.color)
  };

  return (
    <>
      <div className="popupgrid_container">
        {pageIndex[visited].map((item, idx) => (
          <>
          <div key={idx} className="popupgrid_cell">
            <div className="hoverItem">
              <button onClick={() => selectModal(stringList[idx*pageIndex])}>
                Select template
              </button>
            </div>
            <div>{item("default")}</div>
          </div>
          </>
        ))}
      </div>
      <div className="pagination">
        {pageNumber.map((page, idx) => (
          <div
            key={idx}
            style={{ color: visited == idx ? "black" : "gray" }}
            onClick={() => setVisited(idx)}
          >
            {page}
          </div>
        ))}
      </div>
    </>
  );
};

export default PopupGrid;

