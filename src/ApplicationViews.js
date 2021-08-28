import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "./customers/Customers"
import { Employees } from "./employees/Employees"
import { HiringForm } from "./employees/HireEmployee"
import { Locations } from "./locations/Locations"
import { ProductList } from "./products/productList"
import { ProductTypes } from "./products/productTypes"

export const ApplicationViews = () => {
    return (
        <>
        <Route exact path="/locations">
            <Locations />
        </Route>

        <Route exact path="/productList">
            <ProductList />
        </Route>
        <Route exact path="/productTypes">
            <ProductTypes />
        </Route>

        <Route exact path="/employees">
            <Employees />
        </Route>
        <Route exact path="/employees/hire">
            <HiringForm />
        </Route>

        <Route exact path="/customers">
            <CustomerList />
        </Route>
        </>
    )
}
