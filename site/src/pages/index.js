import * as React from "react"
import { container, header, info, svg1, hero, spacer50 } from '../components/main.module.css'
import Icon from "../assets/mountainsblue.svg"

const IndexPage = () => {
  return (
    <div className={container}>
      <div className={header}>
        <h3 style={{fontSize: '1.75rem', margin:'0'}}>Hack Club and Girl Scouts of Utah present</h3>
        <h1 style={{fontSize: '14rem', margin:'0'}}>Alpine</h1>
        
        <h3 style={{fontSize: '2rem', letterSpacing: '2px', marginTop: '10px'}}>July 15th, 2023</h3>
        <Icon className={svg1}/>
      </div>
      <div className={info}>
        <h2>Build your own app, website, or game and make new friends!</h2>
        <p>Alpine is a one-day hackathon, which is an event where participants gather to code projects,
          learn new things, and have fun! You don't need any coding experience to "hack" with us. We're not actually
          "hackers," we just love to code and share our projects.
        </p>
        <div className={spacer50}></div>
      </div>
      <div className={hero}>
      <h2>Join us for a Saturday full of fun, food, and swag!</h2>
        <p>We're providing all meals, some cool swag, and prizes!
        </p>
      </div>
    </div>
    
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
