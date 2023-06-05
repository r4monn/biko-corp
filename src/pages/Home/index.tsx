import Header from "../../components/Header"
import { HomeContainer } from "./styles"

import React from "react"

import StartSection from "../../components/StartSection"
import StatisticsSection from "../../components/StatisticsSection"
import TestimonialsSection from "../../components/TestimonialsSection"
import DifferentialSection from "../../components/DifferentialSection"
import FaqSection from "../../components/FaqSection"
import PackagingSection from "../../components/PackagingSection"
import Footer from "../../components/Footer"


export default function Home() {
  return (
    <>
      <Header />
      <HomeContainer>
        <StartSection />
        <StatisticsSection />
        <TestimonialsSection />
        <DifferentialSection />
        <FaqSection />
        <PackagingSection />
        
        <Footer />
      </HomeContainer>
    </>
  )
}