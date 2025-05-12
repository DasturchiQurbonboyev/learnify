import React from 'react'
import Hero from '../../components/hero/Hero';
import Feature from '../../components/feature/Feature';
import Works from '../../components/works/Works';
import Users from '../../components/users/Users';
import Ready from '../../components/ready/Ready';

const Home = () => {
  return (
    <>
        <Hero />
        <Feature />
        <Works />
        <Users/>
        <Ready/>
    </>
  )
}

export default Home