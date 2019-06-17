// import axios from 'axios';
// const ADD_OPTION = 'ADD_OPTION';
import axios from 'axios'

import * as questionsAPI from '../../API/questionAPI'
export const ADDQUESTION = "ADDQUESTION";
export const GET_ALL_QUSTIONS = "GET_ALL_QUSTIONS"


export const addQues = (question) => {
    return { type: ADDQUESTION, payload: question }
}


export const addNewQuestion = (question, token) => {
    return dispatch => {
        questionsAPI.addNewQuestion(question, token)
            .then(res => dispatch(addQues(res.data)))
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