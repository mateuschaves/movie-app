import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #343434;
  flex: 1;
  padding: 50px;
`;

export const Title = styled.Text`
  color: #FFFFFF;
  font-weight: bold;
  font-size: 24px;
`;

export const Input = styled.TextInput`
  background-color: #232323;
  border-radius: 24px;
  width: 275px;
  color: #FFFFFF;
  padding-left: 20px;
  margin-bottom: 25px;
`;


export const Form = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  background-color: #8D0000;
  border-radius: 24px;
  width: 170px;
  height: 48px;
`;

export const Label = styled.Text`
  color: #FFFFFF;
  font-weight: bold;
  font-size: 18px;
`;
