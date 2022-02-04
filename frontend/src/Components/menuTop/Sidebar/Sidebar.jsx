import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';

const NavIcon = styled(Link)`
   margin-left: 2rem;
  font-size: 2rem;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 575.98px) {
   margin-left: 1rem;
}
`;
const NavIconClose = styled(Link)`
  margin-left: 13rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #121212;
  width: 270px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 84px;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 20;
  @media (max-width: 575.98px) {
      top: 60px;
   }
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
         <IconContext.Provider value={{ color: '#000' }}>
         <div>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        </div>
         </IconContext.Provider>
        
        <IconContext.Provider value={{ color: '#fff' }}>
        <SidebarNav sidebar={sidebar} className='sidebar'>
          <SidebarWrap>
            <NavIconClose to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIconClose>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
