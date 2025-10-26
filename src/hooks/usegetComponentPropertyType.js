
import React from 'react'

const usegetComponentPropertyType = (props) => {
const {icon, ProductImage, widgetContent} = props;
let iconClass=''
let imageClass = ''

if(icon.status === 'available'){
    // const {value:{iconClass:className}} = icon;
    // iconClass = className
    iconClass = icon.value.iconClass
}


if(ProductImage.status === 'available'){
    imageClass = ProductImage.value.uri;
}



  return (
    {iconClass, imageClass, widgetContent}
  )
  
  
}

export default usegetComponentPropertyType