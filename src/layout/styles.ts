import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    'Sidebar Header'
    'Sidebar Content'
    'Player Player';
  grid-template-columns: 0.7fr 5fr;
  grid-template-rows: 5vh 80vh 15vh;
`;
