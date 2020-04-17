import React from 'react'
import { Hero } from '../Components/Hero'
import { Banner } from '../Components/Banner'
import { Link } from 'react-router-dom'
import Services from '../Components/Services'
import FeaturedRoom from '../Components/FeaturedRoom'

export const Home = () => {
    return (
        <>
            <Hero >
                <Banner title="luxurious rooms" subtitle="deluxe rooms startinf at $299">
                    <Link to='/rooms' className="btn-primary" >Our rooms </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRoom />
            

        </>
    )
}
