import { HomeIcon, MusicIcon } from "../../assets/svg";
import { ReactFunction } from "../../types";

export default function Navbar(): ReactFunction {
    return (
        <nav className="NavbarMain">
            <div className="NavbarBackground-Image" />
            <div className="MainMenu">
                <button className="NavbarMain-buttons Home" onClick={() => console.log("Hola 1")
                }>
                    <HomeIcon />
                </button>
                <button className="NavbarMain-buttons Music" onClick={() => console.log("Hola 2")
                }>
                    <MusicIcon />
                </button>
            </div>
            <div className="NavbarMenu">
                <div className="Menu-Buttons">
                    <button className="NavbarMenu-buttons Videos">
                        <h2>VIDEOS</h2>
                    </button>
                    <button className="NavbarMenu-buttons SendDemo">
                        <h2 className="Select">SUBIR DEMO</h2>
                    </button>
                </div>
            </div>
        </nav>
    )
}