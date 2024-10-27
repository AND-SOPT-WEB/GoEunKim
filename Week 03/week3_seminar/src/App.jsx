import Card from './components/Card';
import { members } from './static/members';
import styled from '@emotion/styled';
import './App.css';

function App() {
  return (
    <>
      <h1>🐳 Week2 Seminar 🌊</h1>
      <Cards>
        {members.map((e) => (
          <li key={e.id}>
            <Card name={e.name} englishName={e.englishName} github={e.github} />
          </li>
        ))}
      </Cards>
    </>
  );
}

export default App;

const Cards = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  & > li {
    list-style-type: none;
  }
`;
