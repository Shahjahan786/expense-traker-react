
import './App.css';
import Balance from './Balance';
import Header from './Header';
import IncomeExpenceTotals from './IncomeExpenceTotals';
import TransactionForm from './TransactionForm';
import { ContextProvider } from './TransContext';
import TransItems from './TransItems';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react'


function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" style={{ backgroundColor: '#cfe8fc', paddingLeft: '0px',  paddingRight: '0px', textAlign:'center'}}>
        <ContextProvider>
          <Header />
          <Balance />
          <IncomeExpenceTotals />
          <TransItems />
          <TransactionForm />
        </ContextProvider>


      </Container>

    </React.Fragment>
  );
}

export default App;
