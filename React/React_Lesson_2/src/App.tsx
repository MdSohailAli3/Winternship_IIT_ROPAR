import { JSX } from 'react';
import { BudgetTracker } from './components/BudgetTracker';

const App = (): JSX.Element => (
  <BudgetTracker
    baseCurrency="USD"
    rates={{ USD: 1, EUR: 0.9 }}
  />
);

export default App;
