import { Link, Outlet } from "react-router-dom"
import "./Root.css"

export default function App() {
    return (
        <>
            <nav>
                <Link to = "/">Home</Link>
                <Link to = "/about">About</Link>
            </nav>
            <Outlet />
        </>
    )
}