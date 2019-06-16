import * as questionsAPI from '../../API/questionAPI'

export const ADDQUESTION = "ADDQUESTION";


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
