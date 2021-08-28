import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"



export const Employees = () => {
    const [employees, getEmployees] = useState([])
    const [active, setActive] = useState("")
    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/employees?_expand=location&_sort=locationId&_order=desc")
                .then(res => res.json())
                .then(
                    (data) => {
                        getEmployees(data)
                    }
                )
        },
        []
    )

    useEffect(() => {
        const activeEmployeeCount = employees.filter(employee => employee.id > 0).length
        setActive(`We currently employ ${activeEmployeeCount} people at all our locations`)
    }, [employees])


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
                        return <p key={`employee--${employee.id}`}>{employee.name} | City: {employee.location.city} | Position: {employee.position}</p>
                    }
                )
            }
        </>
    )
}