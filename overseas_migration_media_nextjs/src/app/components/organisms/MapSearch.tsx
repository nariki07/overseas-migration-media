import {ReactNode} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMessage} from "@fortawesome/free-solid-svg-icons";
import {GlobalMap} from "@/app/components/atoms/GlobalMap";
import {SpeechBubble} from "@/app/components/atoms/SpeechBubble";

export const MapSearch = () => {
    return (
        <div className="relative flex justify-center items-center">
          <GlobalMap />
          <div className="absolute top-20 left-80">
              <SpeechBubble>ヨーロッパ</SpeechBubble>
            </div>
        </div>
    );
};