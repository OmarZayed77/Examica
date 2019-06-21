import * as organizationAPI from '../../API/orgAPI';

export const ALL = "ALL";
export const CURRENT = "CURRENT";


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


// export const getCurrent = (userId, orgId, token) => {
// 	return (dispatch) => {
//         organizationAPI.getCurrentOrg(userId, orgId, token)
//         .then(res => {
//             if (res.status === 200) {
//                 dispatch(getCurrentSuccess(res.data));
//             }
//         })
//         .catch(console.error);
// 	};
// };
export const getCurrent = (id) => {
	return { type: CURRENT, payload: id };
};