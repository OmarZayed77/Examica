// import axios from 'axios';
// const ADD_OPTION = 'ADD_OPTION';
import axios from 'axios'

import * as questionsAPI from '../../API/questionAPI'
export const ADDQUESTION = "ADDQUESTION";
export const GET_ALL_QUSTIONS = "GET_ALL_QUSTIONS"


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


export const getAll = () => {
	return (dispatch) => {
        axios.get(`${URL}/api/Questions`)
        .then(res => {
            if (res.status === 200) {
                dispatch(getAllSuccess(res.data));
            }
        })
        .catch(console.error);
	};
};
export const getAllSuccess = (value) => {
	return { type: GET_ALL_QUSTIONS, payload: value };
};