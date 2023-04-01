import CharacterView from './CharacterView';
import CharacterName from './CharacterName'
import '../styles/index.css'
import Stats from './Stats';
import Button from './Button';
import SkillsBoard from './SkillsBoard';

function App() {

  return (
    <div className="App">
      <div className='main'>
        <CharacterView />
        <div>
          <CharacterName />
          <Stats />
        </div>
        <div>
          <Button />
        </div>
      </div>
      <SkillsBoard />
    </div>
  );
}

export default App;
