export const categories = [
    "Games",
    "Books",
    "Movies",
    "Accessories"
  ]

export default class StockItem {
    constructor({ name, description, quantity, price, category }) {
        this.id = Math.floor(Math.random() * 100000)
        this.name = name
        this.description = description
        this.quantity = +quantity
        this.price = +price
        this.category = category
        this.createdAt = new Date()
        this.updatedAt = new Date()
    }
}