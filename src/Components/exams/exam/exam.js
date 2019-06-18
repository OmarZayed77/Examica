import React from 'react';
import { Card, Button } from 'element-react/next';
import '../exam/exam.css'

const Exam = (props) => {
  return (
    <div className="Exam">
          <Card className="Exam-card" >
            <img src="https://www.ecmag.com/sites/default/files/styles/article_medium/public/article_images/thumb_images/test_examine_dreamstime_14882569_2.jpg?itok=BaDalmat" alt="Exam Img" />
            <div style={{ padding: 14 }}>
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
