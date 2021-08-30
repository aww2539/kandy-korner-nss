import { useEffect, useState } from "react"



export const ProductList = () => {
    const [products, getProducts] = useState([])
    const userId = localStorage.getItem("kandy_customer")

    useEffect(
        () => {
            fetch("http://localhost:8088/products?_expand=productType&_sort=productTypeId&_order=asc")
                .then(res => res.json())
                .then(
                    (data) => {
                        getProducts(data)
                    }
                )
        },
        []
    )

    const savePurchase = (id, userId) => {

        const newPurchase = {
            productId: id,
            customerId: parseInt(userId)
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPurchase)
        }

        return fetch("http://localhost:8088/purchases", fetchOption)
    }


    return (
        <>
            <h2>Product List</h2>

            {
                products.map(
                    (product) => {
                        return <div key={`product--${product.id}`} className="productList">
                            <p>{product.name} - Price: {product.price}</p>
                            <button key={`purchase--${product.id}`} onClick={
                                () => {
                                    savePurchase(product.id, userId)
                                    console.log(`Purchased ${product.name}`);
                                }
                            }>Purchase</button>
                        </div>
                    }
                )
            }
        </>
    )
}

