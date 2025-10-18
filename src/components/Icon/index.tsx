import {IconProps} from "@/components/Icon/type"
import {ReactSVG} from "react-svg"
import clsx from "clsx";


export default function Icon (Icons: IconProps){

const {className, icon, }= Icons ;

if(!icon) return null;
const {src} = icon as {src: string}

return (
    <ReactSVG
    src={src}
    beforeInjection={(svg) => {
        svg.removeAttribute('width');
        svg.removeAttribute('height');

        svg.setAttribute('class', clsx('text-black', className));
    }}>

    </ReactSVG>


)

}