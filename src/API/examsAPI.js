import Axios from 'axios';
import URL from './Config/url';

export const getAll = (orgId, token) => {
    return Axios.get(`${URL}/api/exams/organization/${orgId}`, {headers: {Authorization: token}});
}

export const add = (exam, orgId, token) => {
    return Axios.post(`${URL}/api/exams/organization/${orgId}`, exam, {headers: {Authorization: token}});
}