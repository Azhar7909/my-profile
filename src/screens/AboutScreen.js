import React from 'react';
import profileImage from '../assets/images/profile-image.jpg'
import '../App.css'

export default function AboutScreen() {
    return (
        <div className="aboutDiv">
            <section className="about-section py-5" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <img src={profileImage} alt='about me' className='img-responsive mt-5 imgRounded w-50' />
                        </div>
                        <div className="col-md-6 mt-5">
                            <h1 className="display-3">About Me</h1>
                            <p>I am Muhammad Azhar Hussain Zafar, and I am 25 years old. I am Graduated in Software Engineering.</p>
                            <p>I have joined Axiom to improve my skills. I will try my best to do the given projects by myself. I am familer with some topic like HTML, CSS, Javascript and React.</p>
                            <p>My hobbies are playing cricket and watching movies.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
