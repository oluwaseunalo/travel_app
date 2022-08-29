import styled from "styled-components";

export const List = styled.li``;

export const ListItemsContainer = styled.div`
   display: grid;

   grid-template-columns: 0.6fr 0.5fr 1fr 0.5fr 0.5fr;
   margin-left: 2rem;
   margin-right: 2rem;
   gap: 3rem;

   margin: 1.5rem 1.5rem;

   p {
      text-align: start;
      width: 15rem;
      font-size: 0.9rem;
      overflow-wrap: anywhere;
   }
   div {
      text-align: center;
   }

   button {
      width: 4rem;
      height: 2rem;
      background-color: black;
      color: white;
   }

   button:focus {
      background-color: green;
   }
`;
