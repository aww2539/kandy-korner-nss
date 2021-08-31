import { useEffect, useState } from "react"
import { getAllProductTypes } from "../ApiManager"



export const ProductTypes = () => {
    const [productTypes, getProductTypes] = useState([])

    useEffect(
        () => {
            getAllProductTypes()
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