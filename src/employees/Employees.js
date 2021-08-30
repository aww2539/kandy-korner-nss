import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"



export const Employees = () => {
    const [employees, getEmployees] = useState([])
    const [active, setActive] = useState("")
    const history = useHistory()

    const getEmployeeList = () => {
        fetch("http://localhost:8088/employees?_expand=location&_sort=locationId&_order=desc")
            .then(res => res.json())
            .then(
                (data) => {
                    getEmployees(data)
                }
            )
    }
    
    useEffect(
        () => {
            getEmployeeList()
        },
        []
    )

    useEffect(() => {
        const activeEmployeeCount = employees.filter(employee => employee.id > 0).length
        setActive(`We currently employ ${activeEmployeeCount} people at all our locations`)
    }, [employees])

    const fireEmployee = (id) => {
        fetch(`http://localhost:8088/employees/${id}`, {
            method: "DELETE"
        })
        .then(getEmployeeList())
    }
    // Why doesn't this make the new list populate?


    return (
        <>
            <h2>Employees</h2>
            <div>
                <button onClick={() => history.push("/employees/hire")}>Hire Employee</button>
            </div>
            <div>
                { active }
            </div>
            {
                employees.map(
                    (employee) => {
                        return <div key={`employee--${employee.id}`}>
                                    <p>{employee.name} | City: {employee.location.city} | Position: {employee.position}</p>
                                    <button key={`fire--${employee.id}`} onClick={
                                        () => {
                                            fireEmployee(employee.id)
                                        }
                                    }>YOU'RE FIRED!</button>
                                </div>
                    }
                )
            }
        </>
    )
}