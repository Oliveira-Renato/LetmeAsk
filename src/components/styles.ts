import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.primary};
  background-color: rgba(0, 0, 0, 0);
  width: 80px;
  height: 40px;
  position: absolute;
  top:10px;
  display: block;
  padding-left: 10px;
  margin-left: 4px;
  border-radius: 40%;
`;