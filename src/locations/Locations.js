import { useEffect, useState } from "react"



export const Locations = () => {
    const [locations, getLocations] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/locations")
                .then(res => res.json())
                .then(
                    (data) => {
                        getLocations(data)
                    }
                )
        },
        []
    )

    return (
        <>
            <h3>Locations</h3>

            {
                locations.map(
                    (location) => {
                        return <p>{location.city}</p>
                    }
                )
            }
        </>
    )
}