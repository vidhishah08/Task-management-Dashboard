import './App.css';
import Center from './Component/Center';
import Left from './Component/Left';
import Right from './Component/Right';

function App() {
  return (
    <div className='flex flex-row'>
        <Left></Left>
        <Center></Center>
        <Right></Right>
    </div>
  );
}

export default App;
