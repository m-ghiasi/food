import Button from "./button";

export default function AccessLocation(){


    return(
        <div className=" h-screen flex flex-col justify-center items-center p-5">
            <div className="w-52 h-64 rounded-4xl bg-gray-300"></div>
            <Button label="ACCESS LOCATION "></Button>

            <p>DFOOD WILL ACCESS YOUR LOCATION ONLY WHILE USING THE APP</p>



        </div>
    )
}