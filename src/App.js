import './App.css';
import BalanceComponent from './components/balance-component';
import ChartComponent from './components/chart-component';

function App() {
  return (
    <div className="App">
      <div className="container">
        <BalanceComponent />
        <ChartComponent />
      </div>
    </div>
  );
}

export default App;
