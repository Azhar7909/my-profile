import React from 'react'
import QuizAppp01 from '../../assets/images/QuizAppp01.png';

export default function Project01() {
    return (

        <div className="col-md-4 mb-4">
            <div className="card">
                <img src={QuizAppp01} className="card-img-top" height="200px" alt="Quiz" />
                <div className="card-body">
                    <h5 className="card-title">Quiz App</h5>
                    <p className="card-text">In this project, I created a Quiz App. This is made in React TypeScript</p>
                    <a href="http://happy-dinosaurs.surge.sh/" target="blank" className="btn btn-primary">Surge link</a>
                    <a href="https://github.com/Azhar7909/quiz-app-2" target="blank" className="btn btn-primary ml-2">Gitub link</a>
                </div>
            </div>
        </div>

    )
}
