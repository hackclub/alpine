import * as React from "react"
import { Link } from "gatsby"

const pageStyles = {
  color: "#FEFAE0",
  padding: "96px",
  fontFamily: "Manrope, sans-serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        Sorry 😔, we couldn’t find what you were looking for.
        <br></br>
      </p>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
