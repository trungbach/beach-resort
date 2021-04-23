import React, { Component } from 'react'
import Title from './Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';

export default class Services extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            services:[
                {
                    icon:<FaCocktail/>,
                    title:'free cocktails',
                    info:'Lorem Ipsum is simply dummy text of the prFree cocktails just for your drinking pleasure. Feel free to choose from any of our 25 different kinds..'
                },
                {
                    icon:<FaHiking/>,
                    title:'EndlessHiking',
                    info:'Be sure to explore the amazing and scenic hiking trails we have to offer! We provide gear and equipment for you to enjoy hiking as long as you like.'
                },
                {
                    icon:<FaShuttleVan/>,
                    title:'free shuttle',
                    info:'Free shuttle rides around all of our local restaurants and be sure to take the scenic route to get the most out of your ride.'
                },
                {
                    icon:<FaBeer/>,
                    title:'strongest beer',
                    info:'Strong beer like you have never had before! The beer is locally grown and brewed for a more high rich flavor.'
                }
            ]
        }
    }

    render() {
        let services = this.state.services.map((item, index) => 
            <div key={index} className='service'>
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
            </div>);

        return (
            <div className='services'>   
                <Title title='services' />
                <div className="services-center">
                    {services}
                </div>
            </div>
        )
    }
}
