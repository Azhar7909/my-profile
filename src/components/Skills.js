import React from 'react';
import '../App.css';

export default function Skills() {
    return (
        <section className="skills pt-4">
            <div className="row">
                <div className="col-11 col-sm-11 col-md-12 col-lg-12 col-xl-12 text-center">
                    <h1 className="display-4 mt-5">My Skills</h1>
                    <div className="container-skills mb-3">
                        <ul className="skills-ul">
                            <li className="html">HTML5</li>
                            <li className="css">CSS3</li>
                            <li className="javascript">Javascript</li>
                            <li className="react">React</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
