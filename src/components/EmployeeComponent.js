import React,{useState, useEffect} from 'react'
import EmployeeService from '../services/EmployeeService'


function EmployeeComponent() {

    const [employees, setEmployees] = useState([])

    useEffect(() => {
      getEmployees()
    }, [])

    const getEmployees = () => {

        EmployeeService.getEmployees().then((response) => {

            setEmployees(response.data)
            console.log(response.data);

        });
    };

    return (
        <div className = "container">

            <h1 className = "text-center"> Dog List</h1>

            <table className = "table table-striped">
                <thead>
                    <tr>
                        <th> Dog Name</th>
                        <th> Dog Breed</th>
                        <th> Dog Birth Year</th>
                        <th> Dog Vaccinated</th>
                        <th> Needs Vaccine</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {
                        employees.map(
                            employee =>
                            <tr key = {employee.id}>
                                <td> {employee.name}</td>
                                <td> {employee.breed} </td>
                                <td> {employee.birthYear} </td>
                                <td> {employee.vaccinated.toString()} </td>
                                <td> {employee.needsVaccine.toString()}</td>
                            </tr>
                            
                        )
                    }
                </tbody>
            </table>
            
        </div>
    )
}

export default EmployeeComponent