import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Image = styled.ImageBackground`
  flex: 1;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Title = styled.Text`
  color: #FFFFFFFF;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
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
  text-align: left;
`;

export const Gradient = styled(LinearGradient)`
  flex: 1;
  justify-content: flex-end;
  padding-bottom: 50px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Icon = styled(MaterialCommunityIcons)`
  display: flex;
  alignSelf: center;
  color: #8D0000;
  margin-bottom: 60px;
`;

export const MoreText = styled.Text`
   color: #FFFFFFFF;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;
