import axios from 'axios';
import URL from './Config/url';

export const addOrg = (organization, token) => {
	return axios.post(`${URL}/api/Organizations`, organization, { headers: { Authorization: token } });
};
