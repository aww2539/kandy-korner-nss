import React from "react";
import { Locations } from "../locations/Locations";
import { ProductList } from "../products/productList";
import { ProductTypes } from "../products/productTypes";

export const KandyKorner = () => {


    return (
        <>
            <h1>Kandy Korner</h1>

            <Locations />

            <ProductTypes />

            <ProductList />
        </>
    )
}