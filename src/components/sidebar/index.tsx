import { ZnoruxIcon } from "../../assets/images";
import { ReactFunction } from "../../types";

export default function Sidebar(): ReactFunction {
    return (
        <aside className="Sidebar">
            <div className="SidebarTop ZnoruxIcon">
                <picture className="ZnoruxIcon-pic">
                    <img src={ZnoruxIcon} className="ZnoruxIcon-img" alt="Znorux" width={40} height={40}/>
                </picture>
            </div>
        </aside>
    )
}