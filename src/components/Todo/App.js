import Header from '../../shared/layout/Header';
import Footer from '../../shared/layout/Footer';
import Content from '../../shared/layout/Content';
//import Timer from '../Pomodoro/Timer';
import Cripto from '../Cripto/Cripto';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header title="Header" url="https://www.facebook.com"/>
      <Content>
        <Cripto />
      </Content>
      <Footer/> 
    </div>
  );
}

export default App;