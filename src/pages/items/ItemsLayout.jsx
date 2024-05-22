import { Link, Outlet, useLocation } from "react-router-dom";

export default function ItemsLayout() {
    const { pathname } = useLocation()
    
    return (
        <main>
            <h1>Stock Items</h1>
            <div className="tabs">
                <Link to="/items" className={`tab ${pathname === "/items" ? "active" : ""}`}>All items</Link>
                <Link to="/items/new" className={`tab ${pathname === "/items/new" ? "active" : ""}`}>New item</Link>
            </div>
            <Outlet />
        </main>
    )
}