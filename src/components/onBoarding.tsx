import { useState } from "react";
import Button from "./button";
import clsx from 'clsx';
import Login from "./login";

export default function OnBoarding({goNext}:{goNext:()=>void}){

    const [stepOnBd, setStepOnB] = useState<number>(1)


  const stepLeanth = [1,2,3,4]

const handleStep=  (e:React.MouseEvent<HTMLButtonElement>) =>{
    if(stepOnBd < 4){
        setStepOnB(stepOnBd + 1) 
    } if (stepOnBd === 4 ){
        <Login label="login"/>
    }
}

return(
    <div className=" h-screen flex flex-col justify-center items-center p-5">

        {/* content */}
        <div className="bg-gray-500 rounded-2xl w-60 h-72 p-5">
            

        </div>

        {/* discriptions */}
        <div className="mt-8 flex flex-col items-center">
        <h1 className="text-2xl font-bold">All your favorites</h1>
        <p className="text-gray-700 pt-4 text-center ">Get all your loved foods in one once place,
        you just place the orer we do the rest</p>
        </div>

        {/* steps */}
        <div className="flex m-5 gap-3">
            {stepLeanth.map((st)=>(
                <div
                key={st}
                className={clsx('w-[10px] h-[10px] rounded-full  bg-[#FFE1CE]', {
                    'bg-[#FF7622] text-white': st <= stepOnBd ,
                    

                })} ></div>
            ))}

        </div>


        {/* buttons */}
        <div className="flex flex-col gap-4">
            <Button 
            onClick={goNext}
            label="NEXT" className={clsx(
                'text-white bg-[#FF7622] w-[327px] py-5 rounded-2xl'
            )}/>
            <Button label="Skip" className={clsx(
                'text-gray-600 bg-white'
            )}/>
        </div>
    </div>
)
}