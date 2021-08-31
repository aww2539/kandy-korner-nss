

export const getAllLocations = () => {
    return fetch("http://localhost:8088/locations")
        .then(res => res.json())
}

export const getAllProductTypes = () => {
    return fetch("http://localhost:8088/productTypes")
        .then(res => res.json())
}

export const getAllProducts = () => {
    return fetch("http://localhost:8088/products?_expand=productType&_sort=productTypeId&_order=asc")
        .then(res => res.json())
}

export const getAllEmployees = () => {
    return fetch("http://localhost:8088/employees?_expand=location&_sort=locationId&_order=desc")
        .then(res => res.json())
}