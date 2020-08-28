import React from 'react';
import covid19 from '../../assets/images/covid19.png';

export default function Project01() {
    return (

        <div className="col-md-4">
            <div className="card">
                <img onClick="openUrl('http://lying-bike.surge.sh/');" className="card-img-top" src={covid19} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Project 03</h5>
                    <p className="card-text">In this project, I created a form validator. This is made in HTML, CSS and Javascript</p>
                    <a href="http://lying-bike.surge.sh/" target="_blank" className="btn btn-primary">Surge link</a>
                    <a href="https://github.com/Azhar7909/covid-19-tracker-app" target="_blank" className="btn btn-primary">Gitub link</a>
                </div>
            </div>
        </div>

    )
}
