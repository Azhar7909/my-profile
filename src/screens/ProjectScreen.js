import React from 'react'
import Project01 from '../components/projects/Project01';
import Project02 from '../components/projects/Project02';
import Project03 from '../components/projects/Project03';

export default function ProjectScreen() {
    return (
        <section className="projects" >
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className="display-4 mt-4 pb-4">My Projects</h1>
                    </div>
                </div>
                <div className="row">
                    <Project01 />
                    <Project02 />
                    <Project03 />
                </div>
            </div>
        </section>
    )
}
