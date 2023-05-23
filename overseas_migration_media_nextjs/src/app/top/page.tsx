import {Header} from "@/app/components/organisms/layout/Header";
import {MainVisual} from "@/app/components/organisms/MainVisual";
import {GlobalMap} from "@/app/components/atoms/GlobalMap";

export default async function Page() {
    return (
        <div>
            <Header/>
            <MainVisual/>
            <GlobalMap/>
        </div>
    )
}
