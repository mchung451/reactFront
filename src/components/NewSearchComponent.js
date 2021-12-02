import React from 'react'

class AddDog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dogName:"",
            dogBreed:"",
            dogBirthYear:"",
            dogVaccinated:"",
        };

        this.setFormValue = this.setFormValue.bind(this);
    }

    postPackage(event) {
        event.preventDefault();
        const dogName = this.state.dogName;
        const dogBreed = this.state.dogBreed;
        const dogBirthYear = this.state.dogBirthYear;
        const dogVaccinated = this.state.dogVaccinated;

        const requestOptions = {
            method: "POST",
            headers: {
                Accept: "application/json",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    name: dogName,
                    breed: dogBreed,
                    birthYear: dogBirthYear,
                    vaccinated: dogVaccinated, 
            }),
        };
        fetch("http://localhost:8080/Kennel/addDog", requestOptions)
            .then((response) => response.json())
    }

    handleSubmit(event) {
        event.preventDefault();
        alert(
          `you added: \n Name: ${this.state.dogName} \n Breed: ${this.state.dogBreed} \n Birth Year: ${this.state.dogBirthYear} \n Vaccinated: ${this.state.dogVaccinated}`
        );
      }

    setFormValue(event) {
        this.setState({
            dogName:
                event.target.name === "dogName"
                    ? event.target.value
                    : this.state.dogName,
            dogBreed:
                event.target.name === "dogBreed"
                    ? event.target.value
                    : this.state.dogBreed,
            dogBirthYear:
                event.target.name === "dogBirthYear"
                    ? event.target.value
                    : this.state.dogBirthYear,
            dogVaccinated:
                event.target.name === "dogVaccinated"
                    ? event.target.value
                    : this.state.dogVaccinated,                        
        });
    }

    render() {
        return (
            <div>
                <h6> Add a New Dog </h6>
                <form onSubmit={(e) => this.postPackage(e)}>
                    <label>Name: </label>
                    <input type="text" value={this.state.dogName} name="dogName" onChange={(e) => this.setFormValue(e)}/> <br/>
                    <label>Breed: </label>
                    <input type="text" value={this.state.dogBreed} name="dogBreed" onChange={(e) => this.setFormValue(e)}/> <br/>
                    <label>Birth Year: </label>
                    <input type="number" value={this.state.dogBirthYear} name="dogBirthYear" onChange={(e) => this.setFormValue(e)} /> <br/>
                    <label>Vaccinated? (true/false): </label>
                    <input type="text" value={this.state.dogVaccinated} name="dogVaccinated" onChange={(e) => this.setFormValue(e)} /> <br/>
                    {/* {/* 
                    <label  for="dogVaccinated" > Vaccinated?:</label>
                    <select name="dogVaccinated" onChange={(e) => this.setFormValue(e)}>
                    <option value={this.state.dogVaccinated}>True</option>
                    <option value={this.state.dogVaccinated}>False</option>
                    </select>
                    <select name="dogVaccinated" onChange={(event) => this.setFormValue(event)}>
                        <option value={this.state.dogVaccinated}>True</option>
                        <option value={this.state.dogVaccinated}>False</option>
                        </select> */}
                    <input type="submit" value="Submit"></input>
                </form>    
            </div>
        )
    }
}

export default AddDog