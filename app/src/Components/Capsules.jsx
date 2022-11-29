import React from 'react'
import styled from 'styled-components'
import CapsuleCard from './CapsuleCard'

const Grid=styled.div`
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:10px
`
const Capsules = ({capsules}) => {
  return (
    <Grid>
        {capsules.map((item,id)=>(
        <CapsuleCard key={id} item={item}/>
      ))}
    </Grid>
  )
}

export default Capsules