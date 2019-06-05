// import axios from 'axios';

// const ADD_OPTION = 'ADD_OPTION';
import * as questionsAPI from '../../API/questionAPI'

export const ADDQUESTION = "ADDQUESTION";


export const addtorfq = (question) => {
    return { type: ADDQUESTION, payload: question }
}


export const addTrueOrFalseQuestion = (question, token) => {
    return dispatch => {
        questionsAPI.addTrueOrFalseQuestion(question, token)
            .then(res => dispatch(addtorfq(res.data)))
            .catch(console.error);
    }
}
