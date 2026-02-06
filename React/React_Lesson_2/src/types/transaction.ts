import { Currency } from './currency';

export interface BaseEntry {
  readonly id: string;
  readonly amount: number;
  readonly currency: Currency;
  readonly date: Date;
}

export interface IncomeEntry extends BaseEntry {
  readonly source: string;
}

export interface ExpenseEntry extends BaseEntry {
  readonly category: string;
}
