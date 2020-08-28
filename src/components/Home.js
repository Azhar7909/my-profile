import React from 'react'
import profileImage from '../assets/images/profile-image.jpg';
import '../App.css';

export default function Home() {
    return (
        <div>
            <section className="home-section" id="carouselFull">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="home-content pt-5">
                                <h1 className="display-3 mt-5">Welcome To My Profile Projects</h1>
                                <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut sint animi, incidunt eveniet corrupti rem nemo tempore sapiente fuga libero. Sed magnam, reprehenderit fugit, soluta illum earum totam, voluptatum sequi eum minus fuga enim ad id!</p>
                            </div>
                        </div>
                        <div className="col-md-6 text-center">
                            <div className="home-img">
                                <img src={profileImage} className="img-responsive w-50" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
