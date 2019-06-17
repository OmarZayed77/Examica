import * as userAPI from '../../API/userAPI';

export const GET_ALL = "GET_ALL";
export const GET_USER = "GET_USER";


export const getAll=(token) =>{
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


export const getOneUser =(userId,orgId,token)=>{
    return (dispatch)=> {
        userAPI.getUser(userId,orgId,token)
        .then(res=>{
            if(res.status===200){
                dispatch(getUserSuccess(res.data));
            }

        })
        .catch(console.error)
    };

}

export const getUserSuccess =(value)=>{
   return {
       type:GET_USER,
       payload:value,
   }
}