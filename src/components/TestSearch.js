import React,{useState, useEffect} from 'react'
import axios from 'axios';

const SearchApp = () => {
    const [product, setProduct] = useState([]);
    const [search, setSearch] = useState("");

    const getProductData = async () => {
        try {
            const data = await axios.get(
                "http://localhost:8080/Kennel"
            );
            console.log(data.data);
            setProduct(data.data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect (() => {
        getProductData();
}, []);

    return (
        <div className = "container">
            <h6> Search Name</h6>
            <input 
                type = "text"
                placeholder = "Dog Name"
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
            />

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
                    {product
                        .filter((item) => {
                            if (search == "") {
                                return item;
                            } else if (
                                item.name.toLowerCase().includes(search.toLowerCase())
                            ) {
                                return item;
                            }
                        })
                        .map((item) => {
                            return (
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.breed}</td>
                                    <td>{item.birthYear}</td>
                                    <td>{item.vaccinated.toString()}</td>
                                </tr>
                            )
                        })    
                    }

                </tbody>
            </table>
        </div>
    )
}

export default SearchApp;