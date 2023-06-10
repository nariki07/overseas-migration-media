import { GlobalMap } from "@/app/components/atoms/GlobalMap";
import { SpeechBubble } from "@/app/components/atoms/SpeechBubble";

export const MapSearch = () => {
  return (
    <div className="relative">
      <GlobalMap />
      <div className="absolute top-10 left-20">
        <SpeechBubble>ヨーロッパ</SpeechBubble>
      </div>
    </div>
  );
};
a;
