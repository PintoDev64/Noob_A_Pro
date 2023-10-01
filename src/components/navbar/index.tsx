import { Link } from "react-router-dom";
import { HomeIcon, MusicIcon } from "../../assets/svg";
import { ReactFunction } from "../../types";

export default function Navbar(): ReactFunction {
    return (
        <nav className="NavbarMain">
            <div className="NavbarBackground-Image" />
            <div className="MainMenu">
                <Link to='/' className="NavbarMain-buttons Home">
                    <HomeIcon />
                </Link>
                <button className="NavbarMain-buttons Music" onClick={() => console.log("Hola 2")
                }>
                    <MusicIcon />
                </button>
            </div>
            <div className="NavbarMenu">
                <div className="Menu-Buttons">
                    <Link to='/videos' className="NavbarMenu-buttons Videos">
                        <h2>VIDEOS</h2>
                    </Link>
                    <Link to='/form' className="NavbarMenu-buttons SendDemo">
                        <h2 className="Select">SUBIR DEMO</h2>
                    </Link>
                </div>
            </div>
        </nav>
    )
}