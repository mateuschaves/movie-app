import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  background-color: #343434;
  flex: 1;
  padding: 30px;
  padding-bottom: 0px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
`;

export const HeaderTitle = styled.Text`
  color: #EEEEEE;
  font-size: 24px;
  font-weight: bold;
  text-align: left;
`;

export const Avatar = styled.Image`
  border-radius: 90px;
  height: 50px;
  width: 50px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #EEEEEE;
  margin-bottom: 30px;
  font-weight: bold;
`;

export const FilmsCategory = styled.View`
  height: 300px;
`;
