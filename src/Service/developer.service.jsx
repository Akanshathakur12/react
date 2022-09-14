import axios from "axios";

const url = 'http://localhost:8081/developers';

const getAllFeeds = () => {
    return axios.get(`${url}/allfeeds`);
        
}

const create = data => {
    return axios.post(`${url}/addfeed`, data);
}

const addDetails = data => {
    return axios.post(`${url}/adddetails`, data);
}

const getDevById = devId => {
    return axios.get(`${url}/getdetails/${devId}`);
}

const updateDetails = devId => {
    return axios.put(`${url}/editdetails/${devId}`);
}

export default {getAllFeeds, create, addDetails, getDevById, updateDetails};