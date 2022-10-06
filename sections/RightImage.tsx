import { useContext, useEffect,useState } from "react";
import { ContextProvider } from "../functions/Context";
import { allPages } from "../components/PageList";
const RightImage = () => {
    const contextUse = useContext(ContextProvider);


    const [selectModal,setSelectModal]=useState(0)
    
  useEffect(()=>{
        const findModal=stringList.findIndex(z=>z==contextUse.shallowState.modalName)
        // console.log(findingIndex)
        // const findModal=allPages[findingIndex]
        // console.log(findingIndex)
        if(findModal>-1){
        setSelectModal(findModal)
        }
    },
    [contextUse.newVal.modalName])

    return(
        <>
<div className="rightImage_container">{allPages[selectModal]("changeable")}</div>
</>
    )
    }

    export default RightImage
