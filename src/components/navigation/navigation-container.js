import React from 'react';
import { withRouter } from "react-router";
import { NavLink } from 'react-router-dom';

import fblogo from '../../../static/images/fb.png';
import instalogo from '../../../static/images/insta.png';
import twitterlogo from '../../../static/images/twitter.png';




const NavigationComponent = props => {
  
    const dynamicLink = (route, linkText) => {
        return (
            <div className="nav-link-wrapper">
                <NavLink to={route} activeClassName="nav-link-active">{linkText}</NavLink>
            </div>  
        )
    }
  
  
    return (
        <div className="nav-wrapper">
          <div className="top-nav">

            <div className="company">
              Sydnies Styles
            </div>

            <div className="social-links">
                <a href="https://facebook.com"><img className="social-media" src={fblogo}/></a>
                <a href="https://instagram.com"><img className="social-media" src={instalogo}/></a>
                <a href="https://twitter.com"><img className="social-media" src={twitterlogo}/></a>
            </div>

            <div className="contact">
                <div className="phone">
                (801) 369-9573
                </div> 

                <div/>

                <div className="email">
                sydnieherrick@gmail.com
                </div>  
            </div>
          </div>

              <div className="bottom-nav">
                <div className="left-side">
                      <div className="nav-link-wrapper">
                          <NavLink exact to="/" activeClassName="nav-link-active">Home</NavLink>
                      </div> 
  
                      <div className="nav-link-wrapper">
                          <NavLink to="/pricing" activeClassName="nav-link-active">Pricing</NavLink>
                      </div>

                      <div className="nav-link-wrapper">
                          <NavLink to="/portfolio" activeClassName="nav-link-active">Portfolio</NavLink>
                      </div>
  
                      <div className="nav-link-wrapper">
                          <NavLink to="/about" activeClassName="nav-link-active">About</NavLink>
                      </div>   
  
                </div>
  
            </div>
        </div>
    )
  }
  
  export default withRouter(NavigationComponent);