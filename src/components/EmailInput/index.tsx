type EmailInputType =  {
    onValidChange ?: (email:string, isValid:boolean)=>void
}

import { ChangeEvent, useState } from "react";


export default function EmailInput  ({onValidChange}:EmailInputType) {

    const [email,setEmail]= useState<string>("")
    const [error, setError]= useState<string>("")

    const validateEmail = (email: string): boolean => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
      };

    const handleChange = (e:ChangeEvent<HTMLInputElement>):void =>{
        const value = e.target.value;
        setEmail(value)


      const isValid = validateEmail(value)
      setError(isValid? "": "invalid email")
      onValidChange?.(value, isValid);  //«اگر تابع onValidChange تعریف شده بود، اون رو با value و isValid اجرا کن.»//
    //   if(onValidChange){
    //     onValidChange(value,isValid)
    //   }
    }
 

  return (
    <div>
        <input required type="email" onChange={handleChange} placeholder="maya@gmail.com" value={email}/>
        {error && <p  className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
