
import './App.css';
import Balance from './Balance';
import Header from './Header';
import IncomeExpenceTotals from './IncomeExpenceTotals';
import TransactionForm from './TransactionForm';
import { ContextProvider } from './TransContext';
import TransItems from './TransItems';


function App() {
  return (
    <div className='container'>
      <ContextProvider>
        <Header/>
        <Balance/>
        <IncomeExpenceTotals/>
        <TransItems/>
        <TransactionForm/>
      </ContextProvider>
      
   
    </div>
  );
}

export default App;
