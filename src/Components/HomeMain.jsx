import React from 'react'

import HeroSection from './HeroSection'
import StatsIcon from './StatsIcon'
import CardJ from './CardJ'
import New from './New'
import CategoryShowcase from './CategoryShowcase'
import ProductGrid from './ProductGrid'
import TestimonialSlider from './TestimonialSlider'
import HomeBannerWithLists from './HomeBannerWithLists'
import BlogPostGrid from './BlogPostGrid'
import ClientLogoStrip from './ClientLogoStrip'
import Footer from './Footer'
const HomeMain = () => {
  return (
    <div>
          <HeroSection />
          <StatsIcon />
          <CardJ />
          <New />
          <CategoryShowcase />
          <ProductGrid />
          <TestimonialSlider />
          <HomeBannerWithLists />
          <BlogPostGrid />
          <ClientLogoStrip />
         
    </div>
  )
}

export default HomeMain
