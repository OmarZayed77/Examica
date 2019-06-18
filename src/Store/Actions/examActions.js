import * as examsAPI from '../../API/examsAPI';

export const ADD = 'ADD';
export const EDIT = 'EDIT';
export const DELETE = 'DELETE';
export const GET = 'GET';

export const add = (exam, orgId, token) => {
	return (dispatch) => {
		examsAPI
			.add(exam, orgId, token)
			.then((res) => {
				console.log(res);
				if (res.status === 200) {
					dispatch(addSuccess(res.data));
				}
			})
			.catch(console.error);
	};
};
export const addSuccess = (value) => {
	return { type: ADD, payload: value };
};


export const get = () =>{
 return (dispatch) => {
	  examsAPI.getAll()
	  .then(res => {
		  dispatch({type: GET , payload : res.data})
	  })
	  .catch(console.error)
 }
}