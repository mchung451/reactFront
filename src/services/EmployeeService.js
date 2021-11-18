import axios from 'axios';

const EMPLOYEES_RES_API_URL = "http://localhost:8080";

class EmployeeService{


    getEmployees(){
        return axios.get(EMPLOYEES_RES_API_URL);
    }

}

export default new EmployeeService();