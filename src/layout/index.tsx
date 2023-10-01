// Types
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReactFunction } from "../types";

// Styles
import './style.css'
import Videos from "../routes/videos";
import Home from "../routes/home";

export default function Layout(): ReactFunction {

    /* const Enrouter = createBrowserRouter([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/videos',
            element: <Videos />
        }
    ]) */

    return (
        <>
            <Navbar />
            <div className="Pages">
                <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/videos" element={<Videos />}/>
                </Routes>
                </BrowserRouter>
            </div>
            <Sidebar />
        </>
    )
}