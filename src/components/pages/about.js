import React, { Component } from 'react';

import syd from '../../../static/images/sydnie.jpg';
import syd1 from '../../../static/images/sydnie.png';

export default class About extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="about-wrapper">
                <div className="sydnie-image">
                    <img src={syd} />
                    <img src={syd1} />
                </div>
                <div className="about-her">
                    <h1> Sydnie Herrick</h1>
                    <p>
                        Hi!
                    </p>
                    <p>
                        I'm a Utah County hairstylist! I have been graduated 
                        for almost 2 years and I love my job so much, it has been my dream job since I was a 
                        little girl! 
                    </p>
                    <p>
                        I attended Aveda Institute in Provo Utah. I currently work at Shade Nine studio in 
                        American Fork and it is a dream!
                    </p>
                    <p>
                        I specialize in blondes and hair extensions! 
                        My favorite thing to do in the salon is big transformations! I also love doing men's 
                        haircuts, I have a lot of brothers, so I get a lot of practice!
                    </p>
                    <p>
                        My biggest goal in life 
                        is to have a salon in my house so that I can be a full-time mom and still be able to 
                        provide for my family and do what I love every single day!
                    </p>
                    <p>
                        I would love to meet all of you, 
                        and I look forward to seeing you in my chair and making you feel beautiful!
                    </p>
                    
                </div>
                
            </div>
        )
    }
}