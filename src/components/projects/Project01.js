import React from 'react'
import QuizAppp01 from '../../assets/images/QuizAppp01.png';

export default function Project01() {
    return (

        <div className="col-md-4">
            <div className="card">
                <img onClick="openUrl('http://happy-dinosaurs.surge.sh/');" className="card-img-top" src={QuizAppp01} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Project 01</h5>
                    <p className="card-text">In this project, I created a form validator. This is made in HTML, CSS and Javascript</p>
                    <a href="http://happy-dinosaurs.surge.sh/" target="_blank" className="btn btn-primary">Surge link</a>
                    <a href="https://github.com/Azhar7909/quiz-app-2" target="_blank" className="btn btn-primary">Gitub link</a>
                </div>
            </div>
        </div>

    )
}
