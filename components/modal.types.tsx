export type Props = {
    name: string;
  };

  export interface dataType {
    modalName: string;
     size:string;
     position:string;
     color:string;
     logoUrl:string|null;
     content:string[];
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
   }
  
   export interface additionalTypes {
    changer?:(x:any)=>void;
    shallowState:dataType;
    newVal:dataType;
  }