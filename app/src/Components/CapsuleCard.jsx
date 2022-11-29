import React from 'react'
import styled from "styled-components";


const Card=styled.div`
  border:1px solid red;
`

const CapsuleCard = ({item}) => {
  return (
    <Card>
        <h3>Serial : {item.serial}</h3>
        <h4>Status : {item.status}</h4>
        {item.last_update ? `Last Update : ${item.last_update}`:""}
        <p>Type : {item.type}</p>
        <p>Reuse Count : {item.reuse_count}</p> 
    </Card>
  )
}

export default CapsuleCard