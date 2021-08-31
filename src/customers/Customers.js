import { useEffect, useState } from "react"
import { getAllCustomers, getAllPurchases } from "../ApiManager"
import "./Customers.css"



export const CustomerList = () => {
    const [customers, updateCustomers] = useState([])
    const [purchases, updatePurchases] = useState([])
    const [ allCustomerProperties, updateCustomerProperties] = useState([])

    useEffect(
        () => {
            getAllCustomers()
                .then((data) => { updateCustomers(data) })
        },
        []
    )

    useEffect(
        () => {
            getAllPurchases()
                .then((data) => { updatePurchases(data) })
        },
        []
    )
    

    useEffect(
        () => {
            const customerPurchaseTotals = customers.map(
                            (customer) => {
                                customer.total = purchases.filter(purchase => purchase.customerId === customer.id).length
                                return customer
                            }
                )
                updateCustomerProperties(customerPurchaseTotals.sort((a, b) => b.total-a.total)) 
            },
        [purchases]
    )


    return (
        <>
            <table>
                <tr>
                    <th>Customer</th>
                    <th>Candies Bought</th>
                </tr>
            {
                allCustomerProperties.map(
                    (customer) => { return <tr key={`table--${customer.id}`}>
                        <td key={`customer--${customer.id}`} className={"customerList"}>{customer.name}</td>
                        <td key={`total--${customer.id}`} className={"customerTotal"}>{customer.total}</td>
                    </tr>
                    }
                    )
            }
            </table>
        </>
    )
}

