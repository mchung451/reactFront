import React,{useState, useEffect} from 'react'
import RoostService from '../services/RoostService'


function RoostComponent() {

    const [bats, setBats] = useState([])

    useEffect(() => {
      getBats()
    }, [])

    const getBats = () => {

        RoostService.getBats().then((response) => {

            setBats(response.data)
            console.log(response.data);

        });
    };

    return (
        <div className = "container">

            <h3 className = "text-center"> Bat List</h3>

            <table className ="table table-striped table-bordered text-center thead-dark">
                <thead className="thead-dark">
                    <tr>
                        <th> Bat Name</th>
                        <th> Bat Species</th>
                        <th> Bat Birth Year</th>
                        <th> Bat Wingspan</th>
                        <th> Bat Blindness</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {
                        bats.map(
                            bat =>
                            <tr>
                                <td> {bat.name}</td>
                                <td> {bat.species} </td>
                                <td> {bat.birthYear} </td>
                                <td> {bat.wingspan} </td>
                                <td> {bat.blind.toString()}</td>
                            </tr>
                            
                        )
                    }
                </tbody>
            </table>
            
        </div>
    )
}

export default RoostComponent