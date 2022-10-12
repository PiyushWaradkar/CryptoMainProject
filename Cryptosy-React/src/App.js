
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import { makeStyles } from "@material-ui/core";
import Header from './components/Header';
import CoinPage from './pages/CoinPage';
import Homepage from './pages/Homepage';
import axios from 'axios';
import Random from './Random';

const api1=axios.create({
  baseURL:'http://127.0.0.1:8000/SentimentAnalyzer/'
}) 

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

const createcourse=async()=>{
  try {
    let respo=await api1.post('/',{h:"bitcoin"})
    console.log(respo)
  } catch (error) {
    console.log(error)
  }
 }

function App() {

  const classes = useStyles();

 createcourse();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        {/* <Header /> */}
        <Routes>
        {/* <Route path='/' element={<Homepage />} exact /> */}
        {/* <Route path='/c' element={<Random/>} /> */}
        <Route path='/coins/:id' element={<CoinPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
