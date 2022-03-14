import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #FFF;
  flex: 1;
  padding: 4px 0;
`;
export const SearchContainer = styled.View`
  flex-direction: row;
  width: 100%;
  height: 50px;
  align-items: center;
  padding: 0 14px;
  margin-bottom: 8px;
`;
export const Input = styled.TextInput`
  background-color: rgba(0,0,0,0.9);
  width: 85%;
  height: 50px;
  border-radius: 50px;
  padding: 8px 15px;
  font-size: 18px;
  color: #000;
`;
export const SearchButton = styled.TouchableOpacity`
  width: 15%;
  height: 50px;
  align-items: center;
  justify-content: center;
`;