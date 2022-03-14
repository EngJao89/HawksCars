import React from 'react';

import {
  Container, 
  SearchContainer, 
  Input, 
  SearchButton
} from './styles';

import { Feather } from '@expo/vector-icons';

import Header from '../../components/Header';

function Home(){
  return(
    <Container>
      <Header title="Hawks Cars" />

      <SearchContainer>
        <Input 
          placeholder="Procure seu carro" 
          placeholderTextColor="#ddd" 
        />
        <SearchButton >
          <Feather name="search" size={30} color="#000"/>
        </SearchButton>
      </SearchContainer>
    </Container>
  )
}

export default Home;