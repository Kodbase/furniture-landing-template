import React from "react"
import Hero from "../components/Hero"
import Features from "../components/Features"
import MiniGallery from "../components/MiniGallery"
import FAQ from "../components/FAQ"
import CTA from "../components/CTA"
import Abaut from "../components/Abaut"
import Contact from "../components/Contact"
import Footer from "../components/Footer"




export default function Home(){
    return (
        <div>
            <Hero/>
            <Features/>
            <MiniGallery/>
            <FAQ phoneNumber=""/>
            <CTA/>
            <Abaut/>
            <Contact/>
            <Footer/>
        </div>
    )


}