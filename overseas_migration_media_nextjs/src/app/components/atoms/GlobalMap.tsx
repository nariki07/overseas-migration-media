import {faPlane} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const GlobalMap = () => {
    return(
        <div className="relative font-notoSans flex justify-center items-center">
            <div className="relative">
                <FontAwesomeIcon icon={faPlane} style={{ fontSize: "4rem" }} className="absolute left-0 top-0" />
                <img src="/image/map.png" alt="画像" />
            </div>
            <h1 className="text-1xl text-center text-black absolute inset-0 mt-2">
                <span className="text-blue-600">KAIJU.com　</span>WORLD MAP
            </h1>
        </div>
    )
}