import { useContext, useEffect,useState } from "react";
import { ContextProvider } from "../functions/Context";
import { allPages } from "../components/PageList";
const RightImage = () => {
    const contextUse = useContext(ContextProvider);


    const [selectModal,setSelectModal]=useState(0)

    useEffect(()=>{
        const findModal=allPages.findIndex(item=>contextUse.shallowState.modalName==item().type.name)
        setSelectModal(findModal)
    },
    [contextUse.newVal.modalName])


    return(
        <>
<div className="rightImage_container">{allPages[selectModal]("changeable")}</div>
</>
    )
    }

    export default RightImage
