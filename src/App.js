
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Homepage from './Homepage';
import CoinPage from './CoinPage';
import { makeStyles } from '@material-ui/core';
import CryptoContext from './CryptoContext';

function App() {
  const useStyles=makeStyles(()=>({
    App:{
      backgroundColor:"#14151a",
      color:"white",
      minHeight:"100vh",
    },
  }));
  const classes=useStyles();
  return (
   
   <CryptoContext>
    <div className={classes.App}>
      
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path='/coins/:id' element={<CoinPage/>}/>
      </Routes>
      
      </div>
      </CryptoContext>
    
  );
}

export default App;
