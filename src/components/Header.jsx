import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <Link to="/" className="logo">REACT STOCK</Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/items">Items</Link>
                <Link to="/items/new">New Item</Link>
            </nav>
        </header>
    )
}