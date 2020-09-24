import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './AboutUs.css'

class AboutUs extends Component {


    render() {
        return(
            <div className='aboutUs'>
                <p>Company:ThoughtWorks Local</p>
                <p>Location:Xi'an</p>
                <p>For more information, please</p>
                <p>view our <Link to='/'>website</Link></p>
            </div>
        );
    }

}

export default AboutUs;