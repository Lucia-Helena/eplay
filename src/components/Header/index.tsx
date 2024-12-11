import React from 'react';  
import { HeaderContainer, Title, Nav } from './styles'; // Certifique-se de que o caminho está correto  

const Header: React.FC = () => {  
  return (  
    <HeaderContainer>  
      <Title>Meu Portfólio</Title>  
      <Nav>  
        <ul>  
          <li><a href="#Sobre">Sobre</a></li>  
          <li><a href="#Projetos">Projetos</a></li>  
          <li><a href="#Contatos">Contatos</a></li>  
        </ul>  
      </Nav>  
    </HeaderContainer>  
  );  
};  

export default Header;