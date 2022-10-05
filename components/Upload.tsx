export interface Props {
  header: string;
}
import UploadApi from "../functions/UploadApi"
import { ContextProvider } from "../functions/Context";
import { useContext } from "react";
import { dataType } from "./modal.types";
const Upload = (props: Props) => {
  const uploadLogo = () => (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.5 3.5V24.5H3.5V3.5H24.5ZM24.5 0.5H3.5C1.85 0.5 0.5 1.85 0.5 3.5V24.5C0.5 26.15 1.85 27.5 3.5 27.5H24.5C26.15 27.5 27.5 26.15 27.5 24.5V3.5C27.5 1.85 26.15 0.5 24.5 0.5ZM17.21 13.79L12.71 19.595L9.5 15.71L5 21.5H23L17.21 13.79Z"
        fill="#7D4AEA"
      />
    </svg>
  );

  const uploadDropIcon = () => (
    <svg
      width="18"
      height="12"
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5125 4.53C14.0025 1.9425 11.73 0 9 0C6.8325 0 4.95 1.23 4.0125 3.03C1.755 3.27 0 5.1825 0 7.5C0 9.9825 2.0175 12 4.5 12H14.25C16.32 12 18 10.32 18 8.25C18 6.27 16.4625 4.665 14.5125 4.53ZM14.25 10.5H4.5C2.8425 10.5 1.5 9.1575 1.5 7.5C1.5 5.9625 2.6475 4.68 4.17 4.5225L4.9725 4.44L5.3475 3.7275C6.06 2.355 7.455 1.5 9 1.5C10.965 1.5 12.66 2.895 13.0425 4.8225L13.2675 5.9475L14.415 6.03C15.585 6.105 16.5 7.0875 16.5 8.25C16.5 9.4875 15.4875 10.5 14.25 10.5ZM6 6.75H7.9125V9H10.0875V6.75H12L9 3.75L6 6.75Z"
        fill="black"
      />
    </svg>
  );
    const contextUse=useContext(ContextProvider)
  const uploading = async (e:any) => {
    console.log(e.target.files[0]);
    const sent=await UploadApi(e.target.files[0])
    if(props.header=="Upload Your Image"){
      console.log("resim"+sent)
      contextUse.changer?.((prev:dataType)=>({...prev,imgUrl:sent}))
    }else{
    contextUse.changer?.((prev:dataType)=>({...prev,logoUrl:sent}))
  };}
  return (
    <>
      <h4 style={{ marginTop: "1rem", fontSize: "14px" }}>{props.header}</h4>
      <div className="upload_container">
        <div className="upload_logo_container">{uploadLogo()}</div>
        <div className="upload_row">
          <div>{uploadDropIcon()}</div> <div>Drop your image here or</div>
          <div style={{ position: "relative" }}>
            <input
              type="file"
              id="imgupl"
              name="imgupl"
              style={{
                opacity: "0",
                position: "absolute",
                left: "0",
                top: "0",
              }}
              onChange={uploading}
            />
            upload
          </div>
        </div>
      </div>
    </>
  );
};

export default Upload;
