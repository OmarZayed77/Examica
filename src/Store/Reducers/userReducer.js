import * as userActions from '../Actions/userActions';

const initial ={
    allUsers: [
        {Id: "1", UserName: "Dina Gamal Abdelrahman", PhoneNumber: "011" , Email: "d@gmail.com"},
        {Id: "1", UserName: "Annonymous ay 7aga", PhoneNumber: "011" , Email: "d@gmail.com"},
        {Id: "1", UserName: "Dina", PhoneNumber: "011" , Email: "d@gmail.com"},
    ],
    oneUser :null,
    activeUser: null,
    exams: []
};

const userReducer =(state=initial,action)=>{
    let newUser={...state.oneUser}
    let newArrOfUsers=[...state.allUsers];
    let newActiveUser= {...state.activeUser}
    let newArrOfExams = [...state.exams]
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
        case "GET_USER_EXAMS":
            newArrOfExams= action.payload;
            break;
      default:
            break;

    }
    // console.log("active", newActiveUser, "add role", newUser,"all",  newArrOfUsers, "exams", newArrOfExams);
    return {
            allUsers:newArrOfUsers,
            oneUser:newUser,
            activeUser: newActiveUser,
            exams: newArrOfExams
    }
}
export default userReducer;