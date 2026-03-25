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
            <section style={{
                position: "fixed",
                bottom: "12px",
                zIndex: "10",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                margin: "8px",
                padding: "8px",
                borderRadius: "8px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
            
                fontSize: "14px"
            }}>
                <h5 style={{ color: "red", marginBottom: "6px" }}>
                  Bu sayfa bir web template’idir
                </h5>
                <p style={{ margin: "4px 0" }}>
                  Profesyonel ve modern tasarımlarla hazırlanmış bu template, firmanızın web varlığını hızlıca hayata geçirmeniz için hazırlandı.
                </p>
                <p style={{ margin: "4px 0" }}>
                  Kendi markanız için kullanmak veya özelleştirmek isterseniz, sayfadaki iletişim butonlarından bize ulaşabilirsiniz.
                </p>
            </section>

            
            <Hero/>
            <Features/>
            <MiniGallery/>
            <FAQ/>
            <CTA/>
            <Abaut/>
            <Contact/>
            <Footer/>

            
 
        </div>
    )


}