import * as userAPI from '../../API/userAPI';

export const GET_ALL = "GET_ALL";
export const GET_USER = "GET_USER";
export const GET_ACTIVE_USER = "GET_ACTIVE_USER";
export const ADD_ROLE = "ADDROLE";



export const getAll=(orgId, token) =>{
    return (dispatch)=>{
            userAPI.getAllUsers(orgId,token)
            .then(res=>{
                if(res.status===200){
                    dispatch(getAllUsersSuccess(res.data));
                }
            })
            .catch(console.error);
    };

     
}
export const getAllUsersSuccess =(value)=>{
return {type:GET_ALL,payload:value};
};


export const getOneUser =(userId, token)=>{
    return (dispatch)=> {
        userAPI.getUserById(userId,token)
        .then(res=>{
            if(res.status===200){
                dispatch(getOneUserSuccess(res.data));
            }

        })
        .catch(console.error)
    };

};


export const getOneUserSuccess =(value)=>{
    return {
        type: GET_ACTIVE_USER,
        payload:value,
    }
 }

export const addRole = (user, token) =>{
    return dispatch => {
        userAPI.addRole(user, token)
        .then(res =>{
            if (res.status === 200) {
                dispatch(addRoleSuccess(res.data))
            }
        })
        .catch(console.error);
    }
  }

export const getUserSuccess =(value)=>{
   return {
       type:GET_USER,
       payload:value,
   }
}

export const addRoleSuccess = (value) => {
    return {
        type:ADD_ROLE, 
        payload: value }
}
