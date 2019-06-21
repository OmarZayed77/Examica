import * as organizationAPI from '../../API/orgAPI';

export const ALL = "ALL";
export const CURRENT = "CURRENT";
export const ADDORG = "ADDORG";


export const getAll = (token) => {
	return (dispatch) => {
        organizationAPI.getOrgs(token)
        .then(res => {
            if (res.status === 200) {
                dispatch(getAllSuccess(res.data));
            }
        })
        .catch(console.error);
	};
};
export const getAllSuccess = (value) => {
	return { type: ALL, payload: value };
};

export const getCurrent = (id) => {
    return { type: CURRENT, payload: id }
};

export const addOrg = (org, token) => {
	return (dispatch) => {
        dispatch({type: "IsLoading"});
        organizationAPI.addOrg(org, token)
        .then(res => {
            if (res.status === 200) {
                dispatch(addOrgSuccess(res.data));
            }
            dispatch({type: "Loaded"});
        })
        .catch(err => dispatch({type: "Loaded"}));
	};
};
export const addOrgSuccess = (value) => {
	return { type: ADDORG, payload: value };
};