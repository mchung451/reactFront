import React, {Component} from 'react'

class MyWidget extends Component {
  state = {
    dataFromDB: null // set initial state
  };

  processingFunction() {
    const yourData = this.state.dataFromDB;
    // perform processing on database data...
    // plot processed data...
  }
  
  async componentDidMount() {
    const url = "http://localhost:8080/Kennel/";
    const database_data = await this.fetchData(url);
    
    this.setState(() => ({
      dataFromDB: database_data // set data in state from DB
    }));
  }
  
}