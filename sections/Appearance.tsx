import { useEffect, useState } from "react";
import Upload from "../components/Upload";
import { useContext } from "react";
import { ContextProvider } from "../functions/Context";
import RightImage from "./RightImage";
import { dataType } from "../components/modal.types";
const Appearance = () => {
  const buttonSize = ["Small", "Medium", "Large"];
  const [visited, setVisited] = useState<number>(1);
  const [position, setPosition] = useState("center");
  const [color, setColor] = useState("violet");
  const contextUse = useContext(ContextProvider);

  const apperanceUpdate = (
    size: string,
    position: string,
    color: string,

  ) => {
    // contextUse.shallowState.size = size;
    // contextUse.shallowState.position = position;
    // contextUse.shallowState.color = color;
    // contextUse.shallowState.logoUrl = logo;
     contextUse.changer?.((prev:dataType)=>({...prev,size:size,position:position,color:color}))
  };
  useEffect(() => {
    if (buttonSize && position && color) {
      apperanceUpdate(buttonSize[visited], position, color);
    }
  }, [visited, position, color]);

  //styling  for size buttons
  const whiteBox = {
    minWidth: "60px",
    height: "42px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const visitedStyle = {
    color: "black",
    backgroundColor: "white",
  };

  //sections
  const sectionSize = () => {
    return (
      <>
        <h3>Size</h3>
        <div className="appearance_row">
          {buttonSize.map((size, idx) => (
            <div
              key={idx}
              onClick={() => setVisited(idx)}
              style={
                visited == idx
                  ? { ...whiteBox, ...visitedStyle }
                  : { ...whiteBox }
              }
            >
              {size}
            </div>
          ))}
        </div>
      </>
    );
  };

  const sectionPosition = () => {
    return (
      <>
        <h3>Position</h3>
        <div className="smallboxes_container">
          <div
            className="smallboxes"
            style={{
              backgroundColor: position == "top-left" ? "blue" : "inherit",
            }}
            onClick={() => setPosition("top-left")}
          ></div>
          <div
            className="smallboxes"
            style={{ backgroundColor: position == "top" ? "blue" : "inherit" }}
            onClick={() => setPosition("top")}
          ></div>
          <div
            className="smallboxes"
            style={{
              backgroundColor: position == "top-right" ? "blue" : "inherit",
            }}
            onClick={() => setPosition("top-right")}
          ></div>
          <div
            className="smallboxes"
            style={{ backgroundColor: position == "left" ? "blue" : "inherit" }}
            onClick={() => setPosition("left")}
          ></div>
          <div
            className="smallboxes"
            style={{
              backgroundColor: position == "center" ? "blue" : "inherit",
            }}
            onClick={() => setPosition("center")}
          ></div>
          <div
            className="smallboxes"
            style={{
              backgroundColor: position == "right" ? "blue" : "inherit",
            }}
            onClick={() => setPosition("right")}
          ></div>
          <div
            className="smallboxes"
            style={{
              backgroundColor: position == "bottom-left" ? "blue" : "inherit",
            }}
            onClick={() => setPosition("bottom-left")}
          ></div>
          <div
            className="smallboxes"
            style={{
              backgroundColor: position == "bottom" ? "blue" : "inherit",
            }}
            onClick={() => setPosition("bottom")}
          ></div>
          <div
            className="smallboxes"
            style={{
              backgroundColor: position == "bottom-right" ? "blue" : "inherit",
            }}
            onClick={() => setPosition("bottom-right")}
          ></div>
        </div>
      </>
    );
  };

  const sectionColors = () => {
    return (
      <>
        <h3>Colors</h3>
        <div className="color_row">
        <div
            className="color_boxes"
            onClick={() => setColor("violet")}
            style={{ backgroundColor: "#7D4AEA" }}
          ></div>
          <div
            className="color_boxes"
            onClick={() => setColor("black")}
            style={{ backgroundColor: "#000000" }}
          ></div>
          <div
            className="color_boxes"
            onClick={() => setColor("orange")}
            style={{ backgroundColor: "#F37C34" }}
          ></div>
          <div
            className="color_boxes"
            onClick={() => setColor("darkgray")}
            style={{ backgroundColor: "#777777" }}
          ></div>
          <div
            className="color_boxes"
            onClick={() => setColor("gray")}
            style={{ backgroundColor: "#DDDDDD" }}
          ></div>
          <div
            className="color_boxes"
            onClick={() => setColor("white")}
            style={{ backgroundColor: "#FFFFFF" }}
          ></div>
        </div>
      </>
    );
  };

  return (
    <div className="appearance_body">
      <div className="appearance_container">
        {sectionSize()}
        {sectionPosition()}
        {sectionColors()}
        <Upload header={"Upload Your Logo"} />
      </div>
      <div className="appearance_right_image"><RightImage/></div>
    </div>
  );
};

export default Appearance;
