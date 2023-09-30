// Types
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import { FunctionalProps, ReactFunction } from "../types";

// Styles
import './style.css'

export default function Layout({ children }: FunctionalProps): ReactFunction {
    return (
        <>
            <Navbar />
            <Sidebar />
            {children}
        </>
    )
}