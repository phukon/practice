import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
            <Link to = "/">Home</Link>
            <Link to = "/1"> 1</Link>
            <Link to = "/2"> 2</Link>
    </header>
  )
}
