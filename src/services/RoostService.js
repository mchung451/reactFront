import axios from 'axios';

const ROOST_RES_API_URL = "http://localhost:8080/Roost/";

class RoostService{

    getBats(){
        return axios.get(ROOST_RES_API_URL);
    }

}

export default new RoostService();