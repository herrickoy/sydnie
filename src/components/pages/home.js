import React, { Component } from 'react';
import { render } from "react-dom";
import Carousel from "../carousel/home-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CustomerCalendar from "../calendar/calendar";



export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }
    

    render() {
        return (
            <div className="homepage-wrapper">
                <div className="center-column">
                    <div className="create-appointment">
                        <p className="customer-type">Existing customer?</p>
                        <p>Schedule an appointment here</p>
                        <div className="calendar-wrapper">
                            <CustomerCalendar />
                        </div>
                        <p className="customer-type">New customer?</p>
                        <p>Enter info below and you will be given you a call at earliest convenience</p>
                        <div className="inputs">
                            <input type="Text" placeholder="First Name"/>
                            <input type="Text" placeholder="Last Name"/>
                            <input type="Number" placeholder="Phone Number"/>
                            <input type="email" placeholder="Email Address"/>
                        </div>
                    </div>
                    <div className="carousel-wrapper">
                        <Carousel />
                    </div>

                </div>
                
            </div>
        )
    }
}