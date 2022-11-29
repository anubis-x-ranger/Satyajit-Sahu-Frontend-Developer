import React, { useState } from 'react'
import styled from 'styled-components';
import {MdOutlineMenu} from 'react-icons/md'
import {IoMdClose} from 'react-icons/io'
const Container = styled.div`
  min-height: 60px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MdOutlineMenu)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s ease-in;
  li {
    padding: 15px 0px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
`;


const CustomClose = styled(IoMdClose)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: end;
`;
const Navbar = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <div>
       <Container>
        <a>
          <h1>SPACEX</h1>
        </a>
        
        <RightMenu>
          <a href="#">Shop</a>
          <a href="#">SPACEX</a>
          <CustomMenu onClick={() => setBurgerStatus(true)} />
        </RightMenu>
        <BurgerNav show={burgerStatus}>
          <CloseWrapper>
            <CustomClose onClick={() => setBurgerStatus(false)} />
          </CloseWrapper>
          <li>
            <a href="#">Existing Rockets</a>
          </li>
          <li>
            <a href="#">Used Inventory</a>
          </li>
          <li>
            <a href="#">Trade-in</a>
          </li>
          <li>
            <a href="#">Capsules</a>
          </li>
          <li>
            <a href="#">Future Endeavors</a>
          </li>
          <li>
            <a href="#">Home in Space</a>
          </li>
        </BurgerNav>
      </Container>
    </div>
  )
}

export default Navbar