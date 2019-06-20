import axios from 'axios'
import * as questionsAPI from '../../API/questionAPI'
export const ADD_QUESTION = "ADD_QUESTION";
export const DELETE_QUESTION = "DELETE_QUESTION";
export const GET_ALL_QUESTIONS = "GET_ALL_QUESTIONS"




export const addQues = (question) => {
    return { type: ADD_QUESTION, payload: question }
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
    return { type: GET_ALL_QUESTIONS, payload: value };
};



export const deleteQuestion = (id) => {
    return (dispatch) => {
        axios.delete(`${URL}/api/questions/${id}`)
            .then(res => {
                if (res.status === 200) {
                    dispatch(deleteSuccess(res.data));
                }
            })
            .catch(console.error);
    };
};
export const deleteSuccess = (value) => {
    return { type: DELETE_QUESTION, id: value };
};

