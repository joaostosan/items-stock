import { Link, useParams } from "react-router-dom"
import useStock from "../../hooks/useStock"
import DeleteButton from "../../components/DeleteButton"

export default function Item() {
    const { getItem } = useStock()
    const { id } = useParams()

    const item = getItem(id)

    return (
        <div className="item">
            <h2>{item.name}</h2>
            <Link to={`/items/${item.id}/update`}></Link>
            <Link to={`/items/${item.id}/update`} className="button is-small">Update</Link>
            <DeleteButton
                itemId={item.id}
                itemName={item.name}
            />
            <div className="row">
                <span className="item-details">Category: {item.category}</span>
                <span className="item-details">Quantity in stock: {item.quantity}</span>
                <span className="item-details">Price: R$ {item.price}</span>
            </div>
                <p>{item.description}</p>
            <div className="row">
                <p>Created at: {item.createdAt.toDateString()}</p>
                <p>Updated at: {item.updatedAt.toDateString()}</p>
            </div>
        </div>
    )
}