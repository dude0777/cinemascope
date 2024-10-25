import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { Menu, X } from 'react-feather';
import { useState } from 'react';
import { BiCameraMovie } from "react-icons/bi";
import { FiTrendingUp } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { ImNext } from "react-icons/im";
import { FaHome } from 'react-icons/fa';
const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <SidebarContainer isOpen={isOpen}>
        <LogoDetails>
        <LogoIcon  isOpen={isOpen}/>
          <LogoName isOpen={isOpen}>CineScope</LogoName>
        </LogoDetails>
        <NavLinks>
        <NavItem >
              
              <NavLink  to='/' activeClassName="active">
               
                <LinkName >Home</LinkName>
                <Icon><FaHome/></Icon>
              </NavLink>
            </NavItem>
        <NavItem >
              
              <NavLink to='/popular' activeClassName="active">
               
                <LinkName >Popular</LinkName>
                <Icon><FiTrendingUp/></Icon>
              </NavLink>
            </NavItem>

        <NavItem >
              
              <NavLink to='/toprated' activeClassName="active" >
               
                <LinkName>Top Rated</LinkName>
                <Icon><FaStar/></Icon>
              </NavLink>
            </NavItem>
            <NavItem >
              
              <NavLink to='/upcoming' activeClassName="active" >
               
                <LinkName>Upcoming</LinkName>
                <Icon><ImNext/></Icon>
              </NavLink>
            </NavItem>
            
          
           {/* <Indicator></Indicator> */}
        </NavLinks>
       
       
      

      </SidebarContainer>
    
    </>
  );
};

// Styled components
const SidebarContainer = styled.div`
margin-top: 3rem;
z-index: 1;
  left: 20px;
  position: sticky;

  top: 40px;
  bottom: 20px;
  height: 80vh;
  width: ${props => props.isOpen ? '200px' : '95px'};
  background: rgba(36, 38, 49, 0.4) ; /* 50% opacity */

  border-radius: 8px;
  padding: 6px 14px;
 
  transition: all 0.5s ease;
`;
const Icon=styled.span`
  width: 1rem;
  color:white;
 
`


const LogoDetails = styled.div`
  /* height: 60px; */
  display: flex;
  align-items: center;
  justify-content: center;
  gap:0.5rem;
`;


const LogoIcon = styled(BiCameraMovie)`
  color: #fff;
  height: 50px;
  
  min-width: 50px;
  font-size: 28px;

  line-height: 50px;
`;

const LogoName = styled.div`
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  display: ${props => props.isOpen ? 'block' : 'none'};
  opacity: ${props => props.isOpen ? 1 : 0};
  transition: opacity 0.5s ease, visibility 0.5s ease 0.5s;
`;

const NavLinks = styled.ul`
z-index: 3;
  gap: 0.4rem;
  display: flex;
  flex-direction: column;
  width: 100%;

`;

const NavItem = styled.li`
 
  list-style: none;
  transition: all 0.4s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;

`;

const NavLink = styled(RouterNavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
  padding: 12px;
  border-radius: 8px;
  justify-content: space-around;
  z-index: 100;
  width: 100%;
  &.active {
    background-color:#845EC2;
  }

  &:hover {
    background-color:#845EC2;

  }
`;

const LinkName = styled.span`
  font-size: 15px;
  font-weight: 400;
  color: #fff;
  transition: all 0.4s ease;
 
`;




export default SideBar;

