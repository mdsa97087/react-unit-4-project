import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contactsales from '../Components/Contactsales'
import Enterprise from '../Components/Enterprise'
import Home from '../Components/Home'
import Pricing from '../Components/Pricing'
import Product from '../Components/Product'
import Resources from '../Components/Resources'
import SignIn from '../Components/Signin'
import Signup from '../Components/Signin'
import Signupforfree from '../Components/Signupforfree'
import Solution from '../Components/Solution'

function AllRouters() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="/solution" element={<Solution />}></Route>
      <Route path="/pricing" element={<Pricing />}></Route>
      <Route path="/enterprise" element={<Enterprise />}></Route>
      <Route path="/resources" element={<Resources />}></Route>
      <Route path="/contactsales" element={<Contactsales />}></Route>
      <Route path="/signup" element={<Signupforfree />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
    </Routes>
  )
}

export default AllRouters