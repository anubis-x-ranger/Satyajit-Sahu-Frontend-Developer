import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getCapsulesData } from '../Redux/app/action'
import Capsules from './Capsules';

const Flex=styled.div`
  display:flex;
  gap:10px;
  padding:10px;
  justify-content:center;
  align-items:center;
  button{
    height:30px;
    width:30px;
  }
  
`

const DataGrid = () => {
  
  
  const [page, setPage] = useState(1);
  const dispatch=useDispatch();
  const capsules=useSelector((state)=>{return state.capsules})
    console.log(capsules)
    //get current capsules
    const pageNumbers = [1,2,3];
    

    // const currentCapsules=capsules.splice(page*limit,(page*limit)+limit)

    useEffect(() => {
      dispatch(getCapsulesData(page));
      
    }, [page])
    

    
    
  return (
    <div>
      <h1>CAPSULES</h1>
      <Flex>
        <label>Status</label>
        <select name="Capsules">
          <option value="">----</option>
          <option value="unkown">unknown</option>
          <option value="retired">retired</option>
          <option value="active">active</option>
        </select>
        <label>Type</label>
        <select name="" id="">
          <option value="">----</option>
          <option value="Dragon 1.0">Dragon 1.0</option>
          <option value="Dragon 1.1">Dragon 1.1</option>
          <option value="Dragon 2.0">Dragon 2.0</option>
        </select>
      </Flex>
      <Capsules capsules={capsules}/>
      {/* Pagination */}
      <Flex>
        <button onClick={()=>setPage(page-1)}>
          {`<`}
        </button>
        {pageNumbers.map((num)=>(
          <button key={num} onClick={()=>setPage(num)}>{num}</button>
        ))}
        <button onClick={()=>setPage(page+1)}>
          {`>`}
        </button>
      </Flex>
      
    </div>
  )
}

export default DataGrid