import React, { Component } from 'react';



export default class Pricing extends Component {
    constructor(props) {
        super(props)

        this.state = {
            show: null
        }
    }


    render() {
        return (
            <div className="pricing_background_wrapper">
                <div className="hair_styles_wrapper">
                    <h1>Pricing</h1>
                    

                    <div className="services">
                        <div className="service">
                            <div>Money Piece</div>
                            <div>Root Tap</div>
                            <div>Root Smudge</div>
                            <div>Toner add on w/ color</div>
                            <div>Toner touch-up</div>
                            <div>Olaplex</div>
                            <div>Hair cut w/ color</div>
                            <div>Full color</div>
                            <div>Root Retouch</div>
                            <div>Partial Foil</div>
                            <div>Full Foil</div>
                            <div>Full Babylight</div>
                            <div>Balayage</div>
                            <div>Womens haircut</div>
                            <div>Bridal hair</div>
                            <div>Wash and style</div>
                        </div>

                        <div className="symb">
                            <div>&#9679;</div>
                            <div>&#9679;</div>
                            <div>&#9679;</div>
                            <div>&#9679;</div>
                            <div>&#9679;</div>
                            <div>&#9679;</div>
                            <div>&#9679;</div>
                            <div>&#9679;</div>
                            <div>&#9679;</div>
                            <div>&#9679;</div>
                            <div>&#9679;</div>
                            <div>&#9679;</div>
                            <div>&#9679;</div>
                            <div>&#9679;</div>
                            <div>&#9679;</div>
                            <div>&#9679;</div>

                        </div>

                        <div className="price">
                            <div>$40</div>
                            <div>$18</div>
                            <div>$25+</div>
                            <div>$25</div>
                            <div>$50+</div>
                            <div>$30+</div>
                            <div>$25+</div>
                            <div>$80+</div>
                            <div>$60+</div>
                            <div>$120+</div>
                            <div>$140+</div>
                            <div>$160+</div>
                            <div>$150+</div>
                            <div>$45+</div>
                            <div>$75+</div>
                            <div>$35+</div>
                            
                        </div>
                        {/* <div>Money piece &#9679; $40+</div>
                        <div>Root Tap &#9679; $18</div>
                        <div>Root Smudge &#9679; $25+</div>
                        <div>Toner add on with color &#9679; $25</div>
                        <div>Toner touch-up &#9679; $50+</div>
                        <div>Olaplex &#9679; $30+</div>
                        <div>Hair cut with color &#9679; $25+</div>
                        <div>Full color &#9679; $80+</div>
                        <div>Root Retouch &#9679; $60+</div>
                        <div>Partial Foil &#9679; $120+</div>
                        <div>Full Foil &#9679; $140+</div>
                        <div>Full Babylight &#9679; $160+</div>
                        <div>Balayage &#9679; $150+</div>
                        <div>Womens haircut &#9679; $45+</div>
                        <div>Bridal hair &#9679; $75+</div>
                        <div>Wash and style &#9679; $35+</div> */}
                    </div>
                </div>
            </div>
        )
    }
}