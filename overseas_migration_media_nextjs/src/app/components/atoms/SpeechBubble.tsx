import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMessage, faPlane} from "@fortawesome/free-solid-svg-icons";
import {ThemeProvider} from "@material-tailwind/react";
import children = ThemeProvider.propTypes.children;
import {ReactNode} from "react";

export const SpeechBubble = ({ children }:{children: ReactNode}) => {
    return (
        <div className="relative flex items-center">
            <FontAwesomeIcon
                icon={faMessage}
                style={{ color: "beige", fontSize: "3rem", transform: "scaleX(3.2)" }}
            />
            <p className="absolute text-black ml-2 mb-2">{children}</p>
        </div>
    );
};