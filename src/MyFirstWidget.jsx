import { createElement, useCallback } from "react";
import "./ui/MyFirstWidget.css";
import usegetStaticProperty from "./hooks/usegetStaticProperty";
import usegetComponentPropertyType from "./hooks/usegetComponentPropertyType";
import Column from "./components/Column";
import usegetDynamicPropertyType from "./hooks/usegetDynamicPropertyType";
import Big from "big.js";


export function MyFirstWidget(props) {

     const staticWidgetType = usegetStaticProperty(props);
     const {iconClass, imageClass, widgetContent} = usegetComponentPropertyType(props)
     const {value,name, onChangeAction, productPricevalue, setPriceValue, objectType} = usegetDynamicPropertyType(props)
    
     console.log('props',props)
    
     
 
    return (
        <div>


<div className="mx-name-layoutGrid4 mx-layoutgrid mx-layoutgrid-fluid">
<div className="row">
<Column>
 {Object.keys(staticWidgetType).map((key) => (
       <div>
       
          <strong>{key}:</strong> 
          {typeof staticWidgetType[key] === "boolean"
      ? staticWidgetType[key].toString()
      : staticWidgetType[key]}
          
         </div>
        ))}
</Column>
<Column>
<span className={iconClass}></span>
<img src={imageClass} width={100} height={100}/>
{widgetContent}
</Column>
<Column>
    <p>{value}</p>
     <h2>{name}</h2>
     <button onClick={onChangeAction} className="btn-success">Click</button>
     <h2>Price Value: {productPricevalue}</h2>
     <button className="btn-success" onClick={()=>{setPriceValue(new Big(parseFloat((Math.random() * 100).toFixed(2))))}}>Click from Widget</button>

<h6>Object Type</h6>
{
    objectType.map((object)=>{
        const{objectbool, objectString, objectAction} = object
        return <div>
            <p>objectBool: {objectbool.toString()}</p>
             <p>objectString: {objectString}</p>
             <button onClick={() => {
                if(objectAction && objectAction.canExecute){
objectAction.execute();
                }
             }}>Execute Action</button>
        </div>
    })
}

</Column>

   

</div>
</div>



{/* {staticWidgetType.myfirstwidgetValue+''+staticWidgetType.staticbool} */}
    
   



        </div>
      
    );
}
