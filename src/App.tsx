import './App.css';
import Navigation from './components/navigation';
import Portrait from './components/portrait';
import Content from './components/content'
import Footer from './components/footer';

const App = () => {
  return(
    <>
      <Navigation />
      <Portrait/>
      <Content/>
      <Footer/>
    </>
  );
};

export default App
