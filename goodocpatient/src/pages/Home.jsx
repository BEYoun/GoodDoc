import React, { Fragment } from 'react'

import BackgroundPoint from '../components/Elements/BackgroundPoint'
import Default from '../components/Layouts/Default'
import { Features } from '../components/Modules/LandingPage/Features'
import { Footer } from '../components/Modules/LandingPage/Footer'
import { Header } from '../components/Modules/LandingPage/Header'
import Hero from '../components/Modules/LandingPage/Hero'
import { News } from '../components/Modules/LandingPage/News'
import { Testimonials } from '../components/Modules/LandingPage/Testimonials'


export default function Home(){
    return (
    <div className="relative bg-gray-50 overflow-hidden">
      <BackgroundPoint />
      <div className="relative pt-6">
        <Header />
        <Default>
						<Hero />
        </Default>
				<News />
      </div>
			<Features />
			<Testimonials />
			<Footer />
    </div>
    )
}