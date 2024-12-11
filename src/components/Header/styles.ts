import styled from "styled-components";  

export const HeaderContainer = styled.header`  
  display: flex;  
  justify-content: space-between;  
  align-items: center;  
  padding: 20px;  
  background-color: #565f6b;  
  color: #000;  
`;  

export const Title = styled.h1`  
  font-size: 1.5em;  
`;  

export const Nav = styled.nav`  
  & ul {  
    list-style-type: none;  
    display: flex;  
    margin: 0;      
    padding: 0;     
  }  

  & li {  
    margin-right: 15px;  
  }  

  & a {  
    color: white;  
    text-decoration: none;  
    &:hover {  
      text-decoration: underline;   
    }  
  }  
`;