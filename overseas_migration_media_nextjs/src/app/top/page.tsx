import {Header} from "@/app/components/organisms/layout/Header";
import {MainVisual} from "@/app/components/organisms/MainVisual";
import {GlobalMap} from "@/app/components/atoms/GlobalMap";
import {SpeechBubble} from "@/app/components/atoms/SpeechBubble";
import {MapSearch} from "@/app/components/organisms/MapSearch";

export default async function Page() {
    return (
        <div>
            <Header/>
            <MainVisual/>
            <MapSearch/>
        </div>
    )
}
