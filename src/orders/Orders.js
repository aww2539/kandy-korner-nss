import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./Orders.css"

export const Orders = () => {
    const [purchases, getPurchases] = useState([])
    const [active, setActive] = useState("")
    const [totals, setTotals] = useState(new Map())
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

        setTotals(createLineItem())
    }, [purchases])


    // for purchase of purchases
    // if (productId === product.id)
    // purchaseTotal ++1

  

    const createLineItem = () => {
        const purchaseList = new Map()

        for (const purchase of purchases) {

            if (purchaseList.has(purchase.productId)) {
               purchaseList.get(purchase.productId).total++
               purchaseList.get(purchase.productId).price += purchaseList.get(purchase.productId).price
            
            } else {
                purchaseList.set(purchase.productId, {total: 1, price: purchase.product.price, name: purchase.product.name})
            } 
        }
        return purchaseList
    }

    

    return ( 
        
        <>
            <h2>My Orders</h2>
            <h3>{ active }</h3>
            <table>
                <tr>
                    <th>Candy</th>
                    <th>Quantity</th>
                    <th>Total Cost</th>
                </tr>
            {
                [...totals].map(([key, value]) => {
                    return <tr key={key}>
                        <td>{value.name}</td>
                        <td>{value.total}</td>
                        <td>${value.price}</td>
                    </tr>
                })
            }

            </table>
        </>
    )
}

