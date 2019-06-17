import Axios from 'axios';
import URL from './Config/url';

export const getAllUsers = (orgId,token)=>{
    return Axios.get(`${URL}/api/users/organization/${orgId}`, {headers: {Authorization: token}});


}

export const getUser = (userId,orgId,token)=>{
    return Axios.get(`${URL}/api/${userId}/${orgId}`,{headers:{Authorization:token}})
}