import styled from 'styled-components'

const Header = styled.div`
  width: 100%;
  height: 170%;
  background: url(${props => props.background}) no-repeat top center; 
  background-size: 150%;
  position:absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Header