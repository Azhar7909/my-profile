import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotDefinedScreen from '../screens/NotDefinedScreen';
import NavBar from '../components/NavBar'
import HomeScreen from '../screens/HomeScreen';
import Footer from '../components/Footer'
import AboutScreen from '../screens/AboutScreen';
import ProjectScreen from '../screens/ProjectScreen';


export default function Routes() {
    return (
        <div>
            <Router>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={HomeScreen} />
                    <Route exact path="/about" component={AboutScreen} />
                    <Route exact path="/projects" component={ProjectScreen} />
                    <Route  path="*" component={NotDefinedScreen} />
                </Switch>
                <Footer />
            </Router>
        </div>
    )
}
