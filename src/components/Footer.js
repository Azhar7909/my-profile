import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className="footer mt-5" id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <a href="#top" className="btn go-up">Go Up ^</a>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                            <h4> Azhar Hussain </h4>
                        </div>
                        <div className="col-lg-3 col-sm-2 col-xs-3">
                            <h3> Contact </h3>
                            <ul>
                                <li><a className="email" href="#"> muhammadazharhussain54@gmail.com </a></li>
                                <br />
                                <li> <p> Multan </p> </li>
                                <li> <p> Pakistan </p> </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-sm-2 col-xs-3">
                            <ul>
                                <li> <h5> <a href="#carouselFull" style={{ marginTop: '5em' }}> HOME</a> </h5></li>
                                <li> <h5><a href="#about"> ABOUT ME </a> </h5></li>
                                <li> <h5><a href="#projects"> PROJECTS </a> </h5></li>
                                <li> <h5><a href="#skills"> SKILLS </a> </h5></li>
                                <li> <h5><a href="#footer"> CONTACT US </a> </h5></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <p className="pull-left copyright text-center"> Made By Azhar Hussain </p>
                    </div>
                </div>
            </div>
        </footer>

    )
}
