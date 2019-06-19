import * as userActions from '../Actions/userActions';

const initial ={
<<<<<<< HEAD
    allUsers : [],
=======
    allUsers: [
        {Id: "1", UserName: "Dina Gamal Abdelrahman", PhoneNumber: "011" , Email: "d@gmail.com"},
        {Id: "1", UserName: "Annonymous ay 7aga", PhoneNumber: "011" , Email: "d@gmail.com"},
        {Id: "1", UserName: "Dina", PhoneNumber: "011" , Email: "d@gmail.com"},
    ],
>>>>>>> 9597afb4ec94ee084bed602aa4267dc570a9de08
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