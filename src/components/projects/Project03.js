import React from 'react';
import covid19 from '../../assets/images/covid19.png';

export default function Project01() {
    return (

        <div className="col-md-4 mb-4">
            <div className="card">
                <img className="card-img-top" height="200px" src={covid19} alt="covid 19" />
                <div className="card-body">
                    <h5 className="card-title">Covid 19 Tracker App</h5>
                    <p className="card-text">In this project, I created a Covid 19 Tracker. This is made in React Javascript</p>
                    <a href="http://lying-bike.surge.sh/" target="blank" className="btn btn-primary">Surge link</a>
                    <a href="https://github.com/Azhar7909/covid-19-tracker-app" target="blank" className="btn btn-primary ml-2">Gitub link</a>
                </div>
            </div>
        </div>

    )
}
