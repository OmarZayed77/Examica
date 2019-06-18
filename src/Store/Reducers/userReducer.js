import * as userActions from '../Actions/userActions';

const initial ={
    allUsers: [
        {Id: "1", UserName: "Dina Gamal Abdelrahman", PhoneNumber: "011" , Email: "d@gmail.com"},
        {Id: "1", UserName: "Annonymous ay 7aga", PhoneNumber: "011" , Email: "d@gmail.com"},
        {Id: "1", UserName: "Dina", PhoneNumber: "011" , Email: "d@gmail.com"},
    ],
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