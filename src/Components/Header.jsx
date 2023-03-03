import React from 'react'
import "../SASS/Header_two.scss"
import Header_one from './Header_components/Header_one'
import Header_two from './Header_components/Header_two'

const Header = () => {
  return (
    <div>
     <Header_one/> 
     <Header_two/>
    </div>
  )
}

export default Header
