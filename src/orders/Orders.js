import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./Orders.css"

export const Orders = () => {
    const [purchases, getPurchases] = useState([])
    const [active, setActive] = useState("")
    const [mapState, setMapState] = useState(new Map())
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


    //function for new map
    //checks all the stuff
    return (
        <>
            <h2>My Orders</h2>
            <h3>{ active }</h3>
            <table>
                <tr>
                    <th>Candy</th>
                    <th>Price</th>
                </tr>

            {
                purchases.map(
                    (purchase) => { return <tr key={`table--${purchase.id}`}>
                            <td key={`name--${purchase.id}`}>{purchase.product.name}</td>
                            <td key={`price--${purchase.id}`}>{purchase.product.price}</td>
                        </tr>
                    }
                )
            }
            </table>
        </>
    )
}

