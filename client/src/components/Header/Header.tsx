import React from "react";
import { Link } from "react-router-dom";

import {
   Wrapper,
   NavHeader,
   NavList,
   NavItem,
   AnchorTag,
} from "./Header.styles";

const Header: React.FC = () => {
   return (
      <Wrapper>
         <NavHeader>
            <div>LOGO</div>
            <nav>
               <NavList>
                  <NavItem>
                     <AnchorTag to="/#">Home</AnchorTag>
                  </NavItem>
                  <NavItem>
                     <AnchorTag to="/#">About</AnchorTag>
                  </NavItem>
                  <NavItem>
                     <AnchorTag to="/#">Contact</AnchorTag>
                  </NavItem>
                  <NavItem>
                     <AnchorTag to="/#">Services</AnchorTag>
                  </NavItem>
                  <NavItem>
                     <AnchorTag to="/#">Career</AnchorTag>
                  </NavItem>
               </NavList>
            </nav>
         </NavHeader>
      </Wrapper>
   );
};

export default Header;
