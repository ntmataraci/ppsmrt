import { sendStatusCode } from "next/dist/server/api-utils";
import React, { forwardRef, useContext, useEffect, useRef, useState } from "react";
import { ContextProvider } from "../functions/Context";
import {dataType, additionalTypes} from "./modal.types"

type Props = {
  openLanguage: boolean;
  setOpenLanguage: any;
  removeLangFromOuter:string
};

const Languages = ({ openLanguage, setOpenLanguage,removeLangFromOuter }: Props) => {
  const [selectedLanguages, setSelectedLanguages] = useState<number[]>([]);
  const contextUse=useContext(ContextProvider)
  const langList = [
    "English",
    "French",
    "German",
    "Polish",
    "Dutch",
    "Finnish",
  ];

  const [checkAll, setCheckAll] = useState(false);



useEffect(()=>{
  const removeItem=selectedLanguages.filter(item=>langList[item]!=removeLangFromOuter)
  setSelectedLanguages(removeItem)
},[removeLangFromOuter])  // eslint-disable-next-line react-hooks/exhaustive-deps



  const sendSelectedLanguages = (id: number) => {
    if(!selectedLanguages.includes(id)){
    contextUse.changer?.((prev:dataType)=>({...prev,language:[...prev.language,langList[id]]}))
    setSelectedLanguages([...selectedLanguages,id])
    }else{
     const removeItem= selectedLanguages.filter(item=>item!=id)
    const removedList=removeItem.map(item=>langList[item])
     contextUse.changer?.((prev:additionalTypes)=>({...prev,language:removedList}))
     setSelectedLanguages(removeItem)
    }
  };

  const clearAll = () => {
    checkAll && setCheckAll(false);
    contextUse.changer?.((prev:dataType)=>({...prev,language:[]}))
    setSelectedLanguages([]);
    console.log(selectedLanguages);
  };

  const selectAll = () => {
    if (checkAll) {
      setSelectedLanguages([]);
      contextUse.changer?.((prev:dataType)=>({...prev,language:[]}))
      setCheckAll(false);
    } else {
      contextUse.changer?.((prev:dataType)=>({...prev,language:langList.map(item=>item)}))
      setSelectedLanguages([0, 1, 2, 3, 4, 5]);
      setCheckAll(true);
    }
    console.log(selectedLanguages);
  };
  

  return (
    <>
      <div className="languages_container">
        <div className="customScroll">
          <ul>
            <li>
              <input type="checkbox" onChange={selectAll} checked={checkAll} />
              All Languages
            </li>
            {langList.map((lang, idx) => (
              <li key={idx}>
                <input
                  type="checkbox"
                  onChange={() => {
                    sendSelectedLanguages(idx);
                  }}
                  checked={selectedLanguages.includes(idx)}
                />
                {lang}
              </li>
            ))}
          </ul>
        </div>
        <div className="languages_bottom">
          <div onClick={clearAll}>Clear All</div>
          <div onClick={() => setOpenLanguage(!openLanguage)}>Close</div>
        </div>
      </div>
    </>
  );
};

export default Languages;
