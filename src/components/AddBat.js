import React from 'react'

class AddBat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            batName: "",
            batSpecies: "",
            batBirthYear: "",
            batWingspan: "",
            batBlind: "",
        };

        this.setFormValue = this.setFormValue.bind(this);
    }

    postPackage(event) {
        event.preventDefault();
        const batName = this.state.batName;
        const batSpecies = this.state.batSpecies;
        const batBirthYear = this.state.batBirthYear;
        const batWingspan = this.state.batWingspan;
        const batBlind = this.state.batBlind;
    

    const requestOptions = {
        method: "POST",
        headers: {
            Accept: "application/json",
                    'Content-Type':'application/json'
        },
        body: JSON.stringify({
                name: batName,
                species: batSpecies,
                birthYear: batBirthYear,
                wingspan: batWingspan,
                blind: batBlind,
        }),
    };
    fetch("http://localhost:8080/Roost/addBat", requestOptions)
        .then((response) => response.json)
   }

   setFormValue(event) {
       this.setState({
            batName:
                event.target.name === "batName"
                ? event.target.value
                : this.state.batName,
            batSpecies:
                event.target.name === "batSpecies"
                ? event.target.value
                : this.state.batSpecies,
            batBirthYear:
                event.target.name === "batBirthYear"
                ? event.target.value
                : this.state.batBirthYear,
            batWingspan:
                event.target.name === "batWingspan"
                ? event.target.value
                :this.state.batWingspan,
            batBlind:
                event.target.value ==="batBlind"
                ? event.target.value
                : this.state.batBlind    
        });
   }

   render() {
       return (
           <div>
               <h6> Add a New Bat </h6>
               <form onSubmit={(e) => this.postPackage(e)}>
                <label> Name: </label>
                <input type="text" value={this.state.batName} name="batName" onChange={(e) => this.setFormValue(e)}/> <br />   
                <label> Species: </label>
                <input type="text" value={this.state.batSpecies} name="batSpecies" onChange={(e) => this.setFormValue(e)}/>  <br />   
                <label> Birth Year: </label>
                <input type="number" value={this.state.batBirthYear} name="batBirthYear" onChange={(e) => this.setFormValue(e)}/>  <br />   
                <label> Wingspan: </label>
                <input type="number" value={this.state.batWingspan} name="batWingspan" onChange={(e) => this.setFormValue(e)}/>  <br />   
                <label> Blind? (true/false): </label>
                <input type="text" value={this.state.batBlind} name="batBlind" onChange={(e) => this.setFormValue(e)}/>  <br />  
                <input type="submit" value="Submit"></input> 
                </form>
           </div>
       )
   }

}

export default AddBat