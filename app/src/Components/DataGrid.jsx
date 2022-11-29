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
  const [currentPage,SetCurrentPage]=useState(1);
  const [limit,setLimit]=useState(10);
  // const [currentarr,setCurrentarr]=useState([])
  const dispatch=useDispatch();
  const capsules=useSelector((state)=>{return state.capsules})
    // console.log(capsules)
    useEffect(() => {
      dispatch(getCapsulesData())
      
      return () => {
      
      }
    }, [currentPage])
    
    //get current capsules
    const pageNumbers = [];
    const totalCapsules=capsules.length;
    const lastCapsule= currentPage * limit; 
    const firstCapsule= lastCapsule - limit; 
    const currentCapsules= capsules.slice(firstCapsule,lastCapsule); 

    for(let i = 1; i <= Math.ceil(totalCapsules/limit);i++){
      pageNumbers.push(i);
    }

    const paginate=(val)=>{
      if(val>0 && val<=pageNumbers.length+1){
      SetCurrentPage(val);
      }
    }

  return (
    <div>
      <h1>CAPSULES</h1>
      <Flex>
        <label>Status</label><select name="Capsules" id="">
          <option value="">----</option>
        </select>
        <label>Original Launch</label>
        <select name="" id="">
          <option value="">----</option>  
        </select>
        <label>Type</label>
        <select name="" id="">
          <option value="">----</option>
        </select>
      </Flex>
      <Capsules capsules={currentCapsules}/>
      {/* Pagination */}
      <Flex>
        <button onClick={(prev)=>paginate(prev-1)}>{`<`}</button>
        {pageNumbers.map((num)=>(
          <button key={num} onClick={(num)=>paginate(num)}>{num}</button>
        ))}
        <button onClick={(prev)=>paginate(prev+1)}>{`>`}</button>
      </Flex>
      
    </div>
  )
}

export default DataGrid