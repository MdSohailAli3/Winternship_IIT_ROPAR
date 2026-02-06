import { IncomeEntry, ExpenseEntry } from '../types/transaction';

export interface BudgetState {
  readonly incomes: ReadonlyArray<IncomeEntry>;
  readonly expenses: ReadonlyArray<ExpenseEntry>;
}

export type BudgetAction =
  | { type: 'addIncome'; payload: IncomeEntry }
  | { type: 'addExpense'; payload: ExpenseEntry };

export const initialBudgetState: BudgetState = {
  incomes: [],
  expenses: [],
};

export const budgetReducer = (
  state: BudgetState,
  action: BudgetAction
): BudgetState => {
  switch (action.type) {
    case 'addIncome':
      return {
        ...state,
        incomes: [...state.incomes, action.payload],
      };

    case 'addExpense': {
      const totalIncome = state.incomes.reduce(
        (sum, i) => sum + i.amount,
        0
      );
      const totalExpense = state.expenses.reduce(
        (sum, e) => sum + e.amount,
        0
      );

      if (totalExpense + action.payload.amount > totalIncome) {
        throw new Error('Insufficient balance');
      }

      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    }

    default:
      return state;
  }
};
