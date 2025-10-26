import React, { createElement } from 'react'

let value=''
let name =''
let productPricevalue = ''
let setPriceValue=''
const usegetDynamicPropertyType = (props) => {
const {priceColor,texttemp, changePrice, productPrice, objectType} = props
if(priceColor.status == 'available'){
    value = priceColor.value
}

if(texttemp.status == 'available'){
    name=texttemp.value
}

const onChangeAction = () => {
  if(changePrice && changePrice.canExecute){
  changePrice.execute()
}
}

if(productPrice.status == 'available'){
  productPricevalue=productPrice.displayValue
  setPriceValue=productPrice.setValue;
}

  return (
{value, name, onChangeAction, productPricevalue, setPriceValue, objectType}
   
  )
}

export default usegetDynamicPropertyType