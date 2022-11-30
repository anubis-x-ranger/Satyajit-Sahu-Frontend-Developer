import React from 'react'
import styled from "styled-components";
import IMG1 from '../KSC-20190225-PH_SPX01_0001large.png'

const BannerWrapper=styled.div`
  width:100%;
  height:40vh;
  margin:auto;
  border:1px solid transparent;
  display:flex;
  margin:auto;
  justify-content:center;
  color:white;
  text-align:center;
  background-color:blue;
  opacity:0.6;
`

const Banner = () => {
  return (
    <BannerWrapper>
      
        <h1> One destination to know all Capsule Status </h1>
      
    </BannerWrapper>
  )
}

export default Banner