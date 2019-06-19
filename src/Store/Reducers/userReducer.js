import * as userActions from '../Actions/userActions';

const initial ={
    allUsers : [],
    oneUser :null,

};

const userReducer =(state=initial,action)=>{
    let newUser={...state.oneUser}
    let newArrOfUsers=[...state.allUsers];
    switch(action.type){
        case userActions.GET_ALL:
            newArrOfUsers=action.payload
            break;
        case userActions.GET_USER:
            newUser=action.payload
            break;
      default:
            break;

    }
    return {
            allUsers:newArrOfUsers,
            oneUser:newUser,

    }
}
export default userReducer;