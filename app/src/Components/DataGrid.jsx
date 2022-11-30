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
  
  const [limit]=useState(10);
  const [currentarr,setCurrentarr]=useState([]);
  const [page, setPage] = useState(1)
  const dispatch=useDispatch();
  const capsules=useSelector((state)=>{return state.capsules})
    // console.log(capsules)
    //get current capsules
    const pageNumbers = [];
    const totalCapsules=capsules.length;
    for(let i = 1; i <= Math.ceil(totalCapsules/limit);i++){
      pageNumbers.push(i);
    }

   

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
        <button onClick={(prev)=>setPage(prev-1)}>{`<`}</button>
        {pageNumbers.map((num)=>(
          <button key={num} onClick={(num)=>setPage(num)}>{num}</button>
        ))}
        <button onClick={(prev)=>setPage(prev+1)}>{`>`}</button>
      </Flex>
      
    </div>
  )
}

export default DataGrid