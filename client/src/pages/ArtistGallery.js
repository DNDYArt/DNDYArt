import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import picture from '../components/images/abstract-2.jpg'
// import {Motion, spring}

const ArtistGallery = () => {

    useEffect(() => {
        AOS.init({});
    }, [])


  return (

    <>
        <div className='fullGallery'>
            <div className='singleArtistContainer'>
                <div data-aos='fade-up' className='galleryFeatureContainer'>
                    <img src={picture} />
                </div>
                <div className='artistInfo'>
                    <h1>Jason Smith</h1>
                    <h2>Contained Splash <span>c.('21)</span></h2>
                    <p className='artistAboutUnderline'>About the piece:</p>
                    <p className='artistAboutInfo'>Inspired by a psychedelic walk on the beach, this piece portrays the coexistence of fluidity and geometric structure. Many people assume the two don't mix, but Jason Smith would disagree.</p>
                    <p className='artistGalleryPrice'>The current bid is: 15,000</p>
                    {/* <span className="artistGalleryPrice">{featureContext.currentFeature.currentBid}</span> */}
                </div>
            </div>
            <div className='singleArtistContainer'>
                <div data-aos='fade-right' className='galleryFeatureContainer'>
                    <img src={picture} />
                </div>
                <div data-aos='fade-left'className='artistInfo'>
                    <h1>Jason Smith</h1>
                    <h2>Contained Splash <span>c.('21)</span></h2>
                    <p className='artistAboutUnderline'>About the piece:</p>
                    <p className='artistAboutInfo'>Inspired by a psychedelic walk on the beach, this piece portrays the coexistence of fluidity and geometric structure. Many people assume the two don't mix, but Jason Smith would disagree.</p>
                    <p className='artistGalleryPrice'>The current bid is: 15,000</p>
                    {/* <span className="artistGalleryPrice">{featureContext.currentFeature.currentBid}</span> */}
                </div>
            </div>
            <div className='singleArtistContainer'>
                <div data-aos='fade-up' className='galleryFeatureContainer'>
                    <img src={picture} />
                </div>
                <div data-aos='fade-down' className='artistInfo'>
                    <h1>Jason Smith</h1>
                    <h2>Contained Splash <span>c.('21)</span></h2>
                    <p className='artistAboutUnderline'>About the piece:</p>
                    <p className='artistAboutInfo'>Inspired by a psychedelic walk on the beach, this piece portrays the coexistence of fluidity and geometric structure. Many people assume the two don't mix, but Jason Smith would disagree.</p>
                    <p className='artistGalleryPrice'>The current bid is: 15,000</p>
                    {/* <span className="artistGalleryPrice">{featureContext.currentFeature.currentBid}</span> */}
                </div>
            </div>
            <div className='singleArtistContainer'>   
                <div data-aos='fade-right' className='artistInfo'>
                    <h1>Jason Smith</h1>
                    <h2>Contained Splash <span>c.('21)</span></h2>
                    <p className='artistAboutUnderline'>About the piece:</p>
                    <p className='artistAboutInfo'>Inspired by a psychedelic walk on the beach, this piece portrays the coexistence of fluidity and geometric structure. Many people assume the two don't mix, but Jason Smith would disagree.</p>
                    <p className='artistGalleryPrice'>The current bid is: 15,000</p>
                    {/* <span className="artistGalleryPrice">{featureContext.currentFeature.currentBid}</span> */}
                </div>
                <div data-aos='flip-right' className='galleryFeatureContainer'>
                    <img src={picture} />
                </div>
            </div>
        </div>



        {/* <div data-aos='fade-up' className='gallery-container vh'>
            <img src={picture} />
        </div>
        <div data-aos='flip-right' className='gallery-container3 vh'>
            <img src={picture} />
        </div>
        <div data-aos='flip-left' className='gallery-container vh'>
            <img src={picture} />
        </div>
        <div data-aos='fade-right' className='gallery-container vh'>
            <img src={picture} />
        </div> */}
     </>
  )
}

export default ArtistGallery