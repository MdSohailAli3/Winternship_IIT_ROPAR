import { useReducer, useState } from 'react';
import {
  budgetReducer,
  initialBudgetState,
} from '../reducers/budgetReducer';
import { Currency, ConversionRates } from '../types/currency';
import { IncomeEntry, ExpenseEntry } from '../types/transaction';
import { TransactionList } from './TransactionList';

interface BudgetTrackerProps {
  readonly rates: ConversionRates;
  readonly baseCurrency: Currency;
}

export const BudgetTracker = ({
  rates,
  baseCurrency,
}: BudgetTrackerProps): JSX.Element => {
  const [state, dispatch] = useReducer(
    budgetReducer,
    initialBudgetState
  );

  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState<Currency>('USD');

  const handleIncome = (): void => {
    const income: IncomeEntry = {
      id: crypto.randomUUID(),
      amount: Number(amount),
      currency,
      date: new Date(),
      source: 'Manual',
    };

    dispatch({ type: 'addIncome', payload: income });
    setAmount('');
  };

  const handleExpense = (): void => {
    const expense: ExpenseEntry = {
      id: crypto.randomUUID(),
      amount: Number(amount),
      currency,
      date: new Date(),
      category: 'General',
    };

    dispatch({ type: 'addExpense', payload: expense });
    setAmount('');
  };

  return (
    <div>
      <h2>Budget Tracker</h2>

      <input
        type="number"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />

      <select
        value={currency}
        onChange={e => setCurrency(e.target.value as Currency)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>

      <button onClick={handleIncome}>Add Income</button>
      <button onClick={handleExpense}>Add Expense</button>

      <TransactionList title="Income" items={state.incomes} />
      <TransactionList title="Expenses" items={state.expenses} />
    </div>
  );
};
