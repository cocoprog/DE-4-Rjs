import logo from './logo.svg';
import './App.css';
import { Header, ItemListContainer} from './components';

function App() {
  return (
    <div className="App">      
      <Header />
      <main className="App-content">
        <ItemListContainer greeting={'greeting'}/>
        <img src={logo} className="App-logo" alt="logo" />
      </main>
    </div>
  );
}

export default App;
