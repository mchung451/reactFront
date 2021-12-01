import React,{useState, useEffect} from 'react'
import KennelService from '../services/KennelService'


function KennelComponent() {

    const [dogs, setDogs] = useState([])

    useEffect(() => {
      getDogs()
    }, [])

    const getDogs = () => {

        KennelService.getDogs().then((response) => {

            setDogs(response.data)
            console.log(response.data);

        });
    };

    return (
        <div className = "container">

            <h3 className = "text-center"> Dog List</h3>

            <table className ="table table-striped table-bordered text-center thead-dark">
                <thead className="thead-dark">
                    <tr>
                        <th> Dog Name</th>
                        <th> Dog Breed</th>
                        <th> Dog Birth Year</th>
                        <th> Dog Vaccinated</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {
                        dogs.map(
                            dog =>
                            <tr>
                                <td> {dog.name}</td>
                                <td> {dog.breed} </td>
                                <td> {dog.birthYear} </td>
                                <td> {dog.vaccinated.toString()} </td>
                            </tr>
                            
                        )
                    }
                </tbody> 
            </table>
            
        </div>
    )
}

export default KennelComponent