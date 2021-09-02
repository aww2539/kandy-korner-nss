import { useEffect, useState } from "react"
import { getAllProducts } from "../ApiManager"
import "./Inventory.css"


export const InventorySearch = () => {
    const [products, updateProducts] = useState([])
    const [searchTerm, updateSearchTerm] = useState({})

    useEffect(
        () => {
            getAllProducts()
                .then((data) => { updateProducts(data) })
        },
        []
    )



    return (
        <>
            <h2>Inventory Search</h2>

            <section>
                <form className="form--search">
                    <fieldset className="searchField">
                        <input onChange = {
                            (evt) => {
                                const search = evt.target.value
                                updateSearchTerm(search)
                            }
                        }
                            type="text"
                            className="search"
                            placeholder="Enter search terms here"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <button type="search">
                            Search
                        </button>
                    </fieldset>
                </form>
            </section>
        </>
    )
}