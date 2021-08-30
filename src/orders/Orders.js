import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Orders = () => {
    const [purchases, getPurchases] = useState([])
    const [active, setActive] = useState("")
    const { userId } = useParams()

    useEffect( () => {
        fetch(`http://localhost:8088/purchases?customerId=${userId}&_expand=product&_expand=customer`)
            .then(res => res.json())
            .then((data) => {
                getPurchases(data)
            })
    }, [ userId ])

    useEffect(() => {
        const activeOrderCount = purchases.filter(purchase => purchase.id > 0).length
        setActive(`You have purchased ${activeOrderCount} items`)
    }, [purchases])

    return (
        <>
            <h2>My Orders</h2>
            <h3>{ active }</h3>

            {
                purchases.map(
                    (purchase) => {
                        return <p key={`purchase--${purchase.id}`}>Candy: {purchase.product.name} | Price: {purchase.product.price}</p>
                    }
                )
            }
        </>
    )
}