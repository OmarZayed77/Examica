import Axios from 'axios';
import URL from './Config/url';


export const addTrueOrFalseQuestion = (question, token) => {
    return Axios.post(`${URL}/api/questions`, question, {headers: {Authorization: token}});
}