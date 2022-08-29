import styled from "styled-components";

export const Container = styled.div`
   display: grid;
   place-items: center;
   margin-inline: auto;
   margin-top: 3rem;
   margin-bottom: 7rem;
   gap: 1.5rem;

   .liked__repo {
      color: green;
   }
   .view__likes {
      width: 15rem;
      height: 3rem;
      background-color: black;
      color: white;
   }
`;

export const Title = styled.div`
   display: grid;
   grid-template-columns: 1fr 0.97fr 0.86fr 1fr;
   width: 58%;
`;

export const Input = styled.input`
   width: 30rem;
   height: 2.5rem;
   border-radius: 0.5rem;
   outline: none;
   padding: 1rem;
`;
