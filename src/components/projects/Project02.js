import React from 'react'

export default function Project02() {
    return (

        <div className="col-md-4">
            <div className="card">
                <img onClick="openUrl('http://sh-axiom-p01-js-projects.surge.sh/');" className="card-img-top" src="./Images/image_2020_08_09T18_20_45_963Z.png" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Project 02</h5>
                    <p className="card-text">In this project, I created a form validator. This is made in HTML, CSS and Javascript</p>
                    <a href="p01/index.html" target="_blank" className="btn btn-primary">Surge link</a>
                    <a href="https://github.com/samiullahhashmi/axiom-cnc-7-projects/tree/master/p01" target="_blank" className="btn btn-primary">Gitub link</a>
                </div>
            </div>
        </div>

    )
}
