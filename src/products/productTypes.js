import { useEffect, useState } from "react"



export const ProductTypes = () => {
    const [productTypes, getProductTypes] = useState([])

    useEffect(
        () => {
        fetch("http://localhost:8088/productTypes")
            .then(res => res.json())
            .then(
                (data) => {
                    getProductTypes(data)
                }
            )
        },
        []
    )

    return (
        <>
            <h2>Product Types</h2>

            {
                productTypes.map(
                    (productType) => {
                        return <p key={`productType--${productType.id}`}>{productType.name}</p>
                    }
                )
            }
        </>
    )
}