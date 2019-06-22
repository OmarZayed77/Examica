import * as userActions from '../Actions/userActions';

const initial ={
    allUsers: [
        {Id: "1", UserName: "Dina Gamal Abdelrahman", PhoneNumber: "011" , Email: "d@gmail.com"},
        {Id: "1", UserName: "Annonymous ay 7aga", PhoneNumber: "011" , Email: "d@gmail.com"},
        {Id: "1", UserName: "Dina", PhoneNumber: "011" , Email: "d@gmail.com"},
    ],
    oneUser :null,
    activeUser: null
};

const userReducer =(state=initial,action)=>{
    let newUser={...state.oneUser}
    let newArrOfUsers=[...state.allUsers];
    let newActiveUser= {...state.activeUser}
    switch(action.type){
        case userActions.GET_ALL:
            newArrOfUsers=action.payload
            break;
        case userActions.GET_ACTIVE_USER:
            newActiveUser= action.payload;
            break;
        case userActions.GET_USER:
        case userActions.ADD_ROLE:
            newUser=action.payload
            break;
      default:
            break;

    }
    console.log("active", newActiveUser, "add role", newUser,"all",  newArrOfUsers);
    return {
            allUsers:newArrOfUsers,
            oneUser:newUser,
            activeUser: newActiveUser
    }
}
export default userReducer;