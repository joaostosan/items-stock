import { useNavigate } from "react-router-dom"
import useStock from "../hooks/useStock"


export default function DeleteButton({ itemId, itemName }) {
    const { deleteItem } = useStock()
    const navigate = useNavigate()

    const handleDelete = () => {
        if (confirm(`Are you sure to delete ${itemName}?`)) {
            deleteItem(itemId)
            navigate("/items")
        }
    }

    return (
        <button 
        className="button is-danger is-small"
        onClick={handleDelete}>
            Delete
        </button>
    )
}