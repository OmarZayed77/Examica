import React from 'react';
import { Card, Button } from 'element-react/next';
import '../exam/exam.css'

const Exam = (props) => {
  return (
    <div className="Exam">
          <Card className="Exam-card" >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqw8Gh5-Kn4tJ0BA6JIAJvLzzRW33hIRTrEg5Oseg8QGOGp0KrkQ" alt="Exam Img"/>
            <div>
              <span>{props.name}</span>
              <div className="bottom clearfix">
                <time className="time">{props.startDate}</time>
                <time className="time">{props.endDate}</time>
                <Button type="text" className="button">{props.numberOfQuestions}</Button>
              </div>
            </div>
          </Card>
    </div>
  );
};


export default Exam;
