import { useState } from "react"

export const useForm =(initialState={})=>{
    const [values,  setvalues]   = useState(initialState)
    const handleInput = (e)=>{
        setvalues({
            ...values,
            [e.target.name] : e.target.value})
    }

    const reset = ()=>{
        setvalues(initialState)
    }
  
    return [
        values,
        handleInput,
        reset
    ]
}