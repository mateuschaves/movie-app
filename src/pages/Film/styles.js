import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Image = styled.ImageBackground`
  justify-content: flex-end;
  align-items: flex-start;
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const Title = styled.Text`
  color: #FFFFFFFF;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const Year = styled.Text`
  color: #FFFFFFFF;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const Description = styled.Text`
  color: #FFFFFFFF;
  font-size: 20px;
  font-weight: 500;
`;

export const Gradient = styled(LinearGradient)`
  flex: 1;
  justify-content: flex-end;
  padding-bottom: 50px;
  padding-left: 20px;
`;
