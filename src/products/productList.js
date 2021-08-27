import { useEffect, useState } from "react"



export const ProductList = () => {
    const [products, getProducts] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/products")
                .then(res => res.json())
                .then(
                    (data) => {
                        getProducts(data)
                    }
                )
        },
        []
    )


    return (
        <>
            <h2>Product List</h2>

            {
                products.map(
                    (product) => {
                        return <p key={`product--${product.id}`}>{product.name}</p>
                    }
                )
            }
        </>
    )
}

