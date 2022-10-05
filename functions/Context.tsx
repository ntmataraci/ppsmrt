import React, {createContext,useEffect,useState} from "react"
interface dataType {
   modalName: string;
    size:string;
    position:string;
    color:string;
    logoUrl:string|null;
    content:string[]|undefined;
    imgUrl:string|null;
    visitorDevice:string;
    afterSeconds:number;
    afterScroll:number;
    trafficSource:string;
    language:string[];
    exitTargeting:boolean;
    webhookUrl:string;
    sendSubmission:boolean;
    clickData:boolean;
    changer?:(x:any)=>void;
    shallowState:any;
    newVal:dataType;
  }
 
    // newVal:any
    // toggleDark?: () => void;
  

  export const defaultState:any= {

    modalName: "A1_1",
    size:"Medium",
    position:"center",
    color:"violet",
    logoUrl:"",
    content:["Security Code","This code expires in 24 Hours", "Code","Cancel","Continue"],
    imgUrl:"",
    visitorDevice:"desktop",
    afterSeconds:12,
    afterScroll:50,
    trafficSource:".",
    language:[],
    exitTargeting:true,
    webhookUrl:"",
    sendSubmission:false,
    clickData:false,


    // newVal:{},
  };


  
export const ContextProvider=React.createContext<dataType>(defaultState)
export const ContextApi = ({children}:any) => {
const [dataList,setDataList]=useState<dataType>(defaultState)
const update = (x:any) =>{
   setDataList(x)
   console.log(value)
}


const value:any ={
   shallowState:defaultState,
   changer:(x:any)=>update(x),
   newVal:dataList,
}




return(
    <ContextProvider.Provider value={value}>
        {children}
    </ContextProvider.Provider>
)

}

