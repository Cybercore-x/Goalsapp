
import './App.css';
import Header from './componentes/header'
import Footer from './componentes/footer'
import Main from'./componentes/main'
import Lista from './componentes/list/list';

function App() {
  return (
    <div className="App">
    <Header></Header>
    <Main>
      <Lista></Lista>
    </Main>
    <Footer></Footer>
    </div>
  );
}

export default App;
