import React, { Component } from 'react'
import { Title } from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: 'free cocktails',
                info: 'picj it up its cool to know things with ur frteonfs  kalekofdiei3i'
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: 'picj it up its cool to know things with ur frteonfs  kalekofdiei3i'
            },
            {
                icon: <FaShuttleVan />,
                title: 'free Shuttle',
                info: 'picj it up its cool to know things with ur frteonfs  kalekofdiei3i'
            }, {
                icon: <FaBeer />,
                title: 'free Beer',
                info: 'picj it up its cool to know things with ur frteonfs  kalekofdiei3i'
            }
        ]
    }
    render() {
        return (
            <section className='services'>
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
