import axios from 'axios';

const KENNEL_RES_API_URL = "http://localhost:8080/Kennel/";

class KennelService{

    getDogs(){
        return axios.get(KENNEL_RES_API_URL);
    }

}

export default new KennelService();