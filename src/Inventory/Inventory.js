import { useState } from "react"
import { InventoryList } from "./InventoryList"
import { InventorySearch } from "./InventorySearch"


export const Inventory = () => {
    const [searchTerm, updateSearchTerm] = useState("")


    return (
        <>
            <InventorySearch updateSearchState={updateSearchTerm}/>
            <InventoryList searchState={searchTerm}/>
        </>
    )

}