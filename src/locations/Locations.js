import { useEffect, useState } from "react"
import { getAllLocations } from "../ApiManager"



export const Locations = () => {
    const [locations, getLocations] = useState([])

    useEffect(
        () => {
            getAllLocations()
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
                        return <p key={`location--${location.id}`}>{location.city}</p>
                    }
                )
            }
        </>
    )
}