import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    'Sidebar Content'
    'Player Player';
  grid-template-columns: 0.7fr 5fr;
  grid-template-rows: 85vh 15vh;
`;
