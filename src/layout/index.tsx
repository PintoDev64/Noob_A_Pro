// Types
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import { Route, Routes } from "react-router-dom";
import { ReactFunction } from "../types";

// Styles
import './style.css'
import Videos from "../routes/videos";
import Home from "../routes/home";
import Form from "../routes/demo";

export default function Layout(): ReactFunction {
    return (
        <>
            <Navbar />
            <div className="Pages">
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/videos" element={<Videos />}/>
                    <Route path="/form" element={<Form />}/>
                </Routes>
            </div>
            <Sidebar />
        </>
    )
}