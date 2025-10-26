import React from 'react'

const usegetStaticProperty = (props) => {
    const {myfirstwidgetValue, multilinevalue, 
      staticbool, staticint, staticdec:dec, staticenum} = props
  return (
    {
        myfirstwidgetValue,
        multilinevalue,
        staticbool,
        staticint,
       staticdec : parseFloat(dec),
        staticenum
    }
  )
}

export default usegetStaticProperty