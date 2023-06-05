import * as React from "react"
import { container, header, info } from '../components/main.module.css'

const IndexPage = () => {
  return (
    <div className={container}>
      <div className={header}>
        <h3 style={{fontSize: '1.5rem', margin:'0'}}>Hack Club and Girl Scouts of Utah present</h3>
        <h1 style={{fontSize: '13rem', margin:'0'}}>Alpine</h1>
        <h3 style={{fontSize: '2rem', letterSpacing: '2px', marginTop: '10px'}}>July 15th, 2023</h3>
      </div>
      <div className={info}></div>
    </div>
    
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
