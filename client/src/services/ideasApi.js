import axios from 'axios';

class IdeasApi{
    constructor(){
        this._apiUrl='http://127.0.0.1:5001/api/ideas';
    }
    getIdeas(){
        return axios.get(this._apiUrl);
    }
}

export default new IdeasApi();