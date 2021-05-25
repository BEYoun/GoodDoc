import React from 'react'
import BackgroundSchema from '../components/LandingPage/BackgroundSchema'
import BlogSection from '../components/LandingPage/BlogSection'
import FeatureSection from '../components/LandingPage/FeatureSection'
import Footers from '../components/LandingPage/Footers'
import Header from '../components/LandingPage/Header'
import HeroSection from '../components/LandingPage/HeroSection'
import Testimonial from '../components/LandingPage/Testimonial'

const Home: React.FC = () => {
  return (
    <div className="relative bg-yellow-50">
      <BackgroundSchema />
      <Header>
        <main>
          <HeroSection />
          <FeatureSection />
          <Testimonial />
          <BlogSection />
          <Footers />
        </main>
      </Header>
    </div>
  )
}

export default Home
