import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllProducts } from "../ApiManager"


export const InventoryList = ({searchState}) => {
    const [searchResults, updateSearchResults] = useState({})
    const [products, getProducts] = useState([])

    useEffect(
        () => {
            getAllProducts()
                .then((data) => {getProducts(data)})
        },[]
    )

    useEffect(
        () => {
            if (searchState !== "") {
                const foundProduct = products.find(product => product.name.startsWith(searchState))
                if (foundProduct !== undefined) {
                    updateSearchResults(foundProduct)
                } 
            } else {
                updateSearchResults({})
            }
        },
        [searchState]
    )

    return (
        <>
            <h2>Search Results:</h2>
            <Link to="/productList">{searchResults?.name}</Link>
        </>
    )
}