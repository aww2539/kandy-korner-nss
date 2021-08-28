import React, { useState } from "react"
import { useHistory } from "react-router"

export const HiringForm = () => {
    const [hire, update] = useState({
        name: "",
        position: "",
        fullTime: false,
        hourlyRate: 15,
        manager: false,
        locationId: 1
    });

    const history = useHistory()

    const saveEmployee = (event) => {
        event.preventDefault()

        const newHire = {
            name: hire.name,
            position: hire.position,
            fullTime: hire.fullTime,
            hourlyRate: hire.hourlyRate,
            manager: hire.manager,
            locationId: hire.locationId
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newHire)
        }

        return fetch("http://localhost:8088/employees", fetchOption)
            .then(() => {
                history.push("/employees")
            })
    }

    return (
        <form className="hiringForm">
            <h2 className="hiringForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        onChange = {
                            (evt) => {
                                const copy = {...hire}
                                copy.name = evt.target.value
                                update(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="position">Position:</label>
                    <input
                        onChange = {
                            (evt) => {
                                const copy = {...hire}
                                copy.position = evt.target.value
                                update(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Position"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="fullTime">Full Time?</label>
                        <input 
                            onChange = {
                                (evt) => {
                                    const copy = {...hire}
                                    copy.fullTime = evt.target.checked
                                    update(copy)
                                }
                            }
                            type="checkbox"
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="hourlyRate">Hourly Rate?</label>
                        <input 
                            onChange = {
                                (evt) => {
                                    const copy = {...hire}
                                    copy.hourlyRate = parseInt(evt.target.value)
                                    update(copy)
                                }
                            }
                            required autoFocus
                            type="text"
                            className="form-control"
                            placeholder="Hourly Rate"
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="manager">Manager?</label>
                        <input 
                            onChange = {
                                (evt) => {
                                    const copy = {...hire}
                                    copy.manager = evt.target.checked
                                    update(copy)
                                }
                            }
                            type="checkbox"
                        />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={saveEmployee}>
                Hire Employee
            </button>
        </form>
    )
}