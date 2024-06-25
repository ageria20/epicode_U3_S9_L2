import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './component/MyNav';
import MyFooter from './component/MyFooter';
import AllTheBooks from './component/AllTheBooks';


function App() {
  return (
    <>
    <MyNav/>
    <AllTheBooks/>
    <MyFooter/>
    </>
  );
}

export default App;
