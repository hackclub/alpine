import * as React from "react"
import { container, header, info, svg1, hero, spacer50, accordion, panel } from '../components/main.module.css'
import Icon from "../assets/mountainsblue.svg"
import Layout from "../src/styles/parallax.css"
import Background from "gatsby-background-image"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const IndexPage = () => {
  return (

    <div className={container}>
      <div className={header}>
      <Layout>
      <div>
        <div className="parallax">
          <img src="https://uc838fc6f972232301d09a8b1999.previews.dropboxusercontent.com/p/thumb/AB6KsvhEwQDlLJclrHjjDl-rCqkz1pDi9bwATSHL7n2Ad_fOBOccNdGRskkuRV2Gq_hsJuMgIesrRcl5It-RH4FMZp2qYIPza65xX0j15bG8eWfrwC9I1mKxSpF7GcwLPx6I3YD99-dSokWeTdWUtxGOET_vc85uvOtdRazHWHQ3jgqw0ySLj0g30aSKhi2FWLMNmkcEE7-tyHP5KXYbCToANTAWrG1u-r1DH_QHQ3cGyokJDuxRbHIWkXlbt10uhRPURQJ7dW7yV3wOqW-JrDBuh4FdcILnRKVqoDLqo1LiAa1JH7E9lA1yT20ZnoFI-Bv6-9tcaEnU9qjKjcL6N82DuMAYdUWL5Lswpb6mGURdjV1CjVVOp3LOuiYbBJr07wLgroybb416C2eyPbdnWALrhoavTyify7ocRKsmhKh71ZmU7p8dm7NZQG-GxLMhqQpXxZjANXUYHkCsUjLqlZXfOXtr9KW-iA9j40DBRQw3hIM3WJki7Dk6-dzI_jd4QsOhXEOsiALJiS_sqKRFrE9XYuD675Jco01JIVLeFQqlSaFJVr00bXUUcoUPWNHN9ma8gkrbm3fE49KL51tcRz5KUAf6A1fNQUjxNQI1gXYGVZffBAt9AmWtZbYhEnMIASo/p.jpeg" alt="Your image" />
        </div>
      </div>
      <BackgroundImage
      
      >

      </BackgroundImage>
    </Layout>
        
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

export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "hackathon.jpg" })
  }
`;

export const Head = () => <title>Home Page</title>
