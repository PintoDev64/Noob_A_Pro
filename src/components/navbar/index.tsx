import { ZnoruxIcon } from "../../assets";

export default function Navbar() {
    return (
        <nav>
            <div className="TextIcon">
                <h1>DE NOOB A PRO</h1>
            </div>
            <div className="NavbarMenu">
                <button className="NavbarMenu-buttons Home">
                    <h1>INICIO</h1>
                </button>
                <button className="NavbarMenu-buttons SendDemo">
                    <h1>SUBIR DEMO</h1>
                </button>
            </div>
            <div className="ZnoruxIcon">
                <picture className="ZnoruxIcon-pic">
                    <img src={ZnoruxIcon} className="ZnoruxIcon-img" alt="Znorux" />
                </picture>
            </div>
        </nav>
    )
}