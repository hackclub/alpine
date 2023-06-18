import * as React from "react"
import { container, header, info, svg1, hero, spacer50, accordion, panel } from '../components/main.module.css'
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
      <div className={info}>
        <h2 style={{fontSize: '3rem', marginTop: '100px'}}>FAQs</h2>
      </div>

      <div className={accordion}>
      <button style={{fontSize: '1.25rem'}}>Am I eligible to participate in Alpine?</button>
        <div className={panel}>
          <p>This event is open to Cadettes, Seniors, and Ambassadors. Girl Scouts can sign up on the GSGNY registration page.</p>
        </div>


        <button style={{fontSize: '1.25rem'}}>Do I need prior coding experience to participate?</button>
        <div className={panel}>
        <p>Hackers of all skill levels, including beginners, are welcome to join! We will be hosting programming workshops and other introductory events to help you get started, examples of which you can check out here!</p>
        </div>

        <button style={{fontSize: '1.25rem'}}>What can I make at Alpine?</button>
        <div className={panel}>
        <p>Girl Scouts can create projects for their Highest Awards! You
                  can create a website, an app, or anything else that will help
                  you take action in your community-whether that's promoting a
                  cause, educating about an issue, or solving a problem. As a
                  bonus, everyone will take home a special patch from this day!</p>
        </div>

        <button style={{fontSize: '1.25rem'}}>How much does it cost to attend?</button>
        <div className={panel}>
        <p>This event is free to Hack Clubbers. Girl Scouts should reach
                  out to{' '}
                  <a
                    href="mailto:email@email.org"
                    target="_blank"
                    rel="noreferrer">
                    email@email.org
                  </a>{' '}
                  to learn more.</p>
        </div>

        <button style={{fontSize: '1.25rem'}}>What do I need to bring to Alpine?</button>
        <div className={panel}>
        <p>Bring a laptop if you have one, and also bring a water bottle!
                  Lunch and snacks will be provided by Girl Scouts.</p>
        </div>

        <button style={{fontSize: '1.25rem'}}>How secure is this event?</button>
        <div className={panel}>
        <p>Alpine will be supervised by background-checked staff and overseen by
            security staff 24/7.</p>
        </div>

        <button style={{fontSize: '1.25rem'}}>Who can my parents/guardians reach out to with their concerns?</button>
        <div className={panel}>
        <p>They can reach out to us at{' '}
            <a href="mailto:horizon@hackclub.com">horizon@hackclub.com</a>{' '}
            and we'll make sure to answer all their questions.</p>
        </div>
      </div>
    </div>
    
    
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
