import * as userActions from '../Actions/userActions';

const initial ={
    allUsers: [],
    allUsersOfOrg: [],
    oneUser :null,
    activeUser: null,
    exams: []
};

const userReducer =(state=initial,action)=>{
    let newUser={...state.oneUser}
    let newArrOfUsers=[...state.allUsers];
    let newArrOfOrgUsers=[...state.allUsersOfOrg];
    let newActiveUser= {...state.activeUser}
    let newArrOfExams = [...state.exams]
    switch(action.type){
        case userActions.GET_ALL:
            newArrOfUsers=action.payload
            break;
        case userActions.GET_ALL_Of_Org:
                newArrOfOrgUsers=action.payload
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
    console.log("all Users", newArrOfUsers, "Org users", newArrOfOrgUsers);
    return {
            allUsers:newArrOfUsers,
            allUsersOfOrg: newArrOfOrgUsers,
            oneUser:newUser,
            activeUser: newActiveUser,
            exams: newArrOfExams
    }
}
export default userReducer;