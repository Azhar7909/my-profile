import React from 'react';
import expensep02 from '../../assets/images/expensep02.png';

export default function Project02() {
    return (

        <div className="col-md-4 mb-4">
            <div className="card">
                <img className="card-img-top" height="200px" src={expensep02} alt="Expense" />
                <div className="card-body">
                    <h5 className="card-title">Expense Tracker App</h5>
                    <p className="card-text">In this project, I created an Expense Tracker. This is made in React Javascript</p>
                    <a href="http://graceful-hot.surge.sh/" target="blank" className="btn btn-primary">Surge link</a>
                    <a href="https://github.com/Azhar7909/expenses" target="blank" className="btn btn-primary ml-2">Gitub link</a>
                </div>
            </div>
        </div>

    )
}
