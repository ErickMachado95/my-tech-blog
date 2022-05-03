import React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from '../sass/about.module.sass'


const paragraphContent = "Welcome to my personal website! This will be more of a hybrid-blog "
+ "webiste where I talk about the development process of projects I'm working on, software related "
+ " problems I've come across, and general software things I'm interested in talking about."
+ " There are really no set rules so look around! Might come across something you like."


const AboutPage = () => { 

  return (
    <Layout 
      pageTitle={'About Page'}
      alternateBackground={'#F6F6F6'}
    >
      <div>
        <p>
          {paragraphContent}
        </p>
      </div>
    </Layout>
  )
}

export default AboutPage