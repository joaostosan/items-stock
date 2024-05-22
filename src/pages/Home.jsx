import { Link } from "react-router-dom";
import useStock from "../hooks/useStock";

export default function Home() {
    const { items } = useStock()

    const diversity = items.length
    const inventoryTotal = items.reduce((acc, item) => acc + +item.quantity, 0)
    
    const currentDate = new Date();
    const limitDate = new Date();
    limitDate.setDate(currentDate.getDate() - 10);
    const recentItems = items.filter((item) => item.createdAt >= limitDate && item.createdAt <= currentDate);
    const recentTotal = recentItems.length;

    const lowQuantityItems = items.filter(product => product.quantity < 10)
    const lowQuantityTotal = lowQuantityItems.length

    return (
        <section className="items-section">
            <h1>Dashboard</h1>
            <div className="row">
                <div className="dashboard-card">
                    <h3>Items diversity</h3>
                    <span>{diversity}</span>
                </div>
                <div className="dashboard-card">
                    <h3>Total inventory</h3>
                    <span>{inventoryTotal}</span>
                </div>
                <div className="dashboard-card">
                    <h3>Recents items</h3>
                    <span>{recentTotal}</span>
                </div>
                <div className="dashboard-card">
                    <h3>Items running out</h3>
                    <span>{lowQuantityTotal}</span>
                </div>
            </div>
            <div className="row">
                <div className="recent">
                <table>
                    <thead>
                        <tr>
                            <th>Recent items</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentItems.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>
                                <Link to={`/items/${item.id}`} className="button is-small">See</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
                <div className="low">
                <table>
                    <thead>
                        <tr>
                            <th>Low quantity items</th>
                            <th>Qty</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lowQuantityItems.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.quantity} un.</td>
                                <td>
                                    <Link to={`/items/${item.id}`} className="button is-small">See</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </div>
        </section>
    )
}