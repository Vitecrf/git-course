import React from 'react';
import Home from "./Home";
import {Switch, Route} from "react-router-dom";
import Feedback from "./Feedback";
import Contact from "./Contact";

const Main = (props) => {
    return (
        <Switch>
            <Route path={['/', '/home']} exact component={Home}/>
            <Route path={'/contact'} exact component={(args) => <Contact clickMe={props.clickMe} color={props.color} {...args}/>}/>
            <Route path={'/feedback'} exact component={Feedback}/>

        </Switch>
    );
};

export default Main;