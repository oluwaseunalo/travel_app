import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
   background-color: #30414e;
   color: white;
   padding: 2rem 10rem 2rem 10rem;
   padding-inline: auto;
   font-size: 1.5rem;
`;
export const NavHeader = styled.header`
   display: flex;
   justify-content: space-between;
`;
export const NavList = styled.ul`
   display: grid;
   grid-template-columns: repeat(5, 1fr);
   list-style: none;
   gap: 1rem;
   width: 30rem;
`;
export const NavItem = styled.li`
   list-style: none;
`;
export const AnchorTag = styled(Link)`
   text-decoration: none;
   color: white;
   cursor: pointer;

   &:hover {
      border-bottom: 2px solid yellow;
   }
`;
