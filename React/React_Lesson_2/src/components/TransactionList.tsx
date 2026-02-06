import { BaseEntry } from '../types/transaction';

interface TransactionListProps<T extends BaseEntry> {
  readonly title: string;
  readonly items: ReadonlyArray<T>;
}

export const TransactionList = <T extends BaseEntry>({
  title,
  items,
}: TransactionListProps<T>): JSX.Element => (
  <>
    <h3>{title}</h3>
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.amount} {item.currency} –{' '}
          {item.date.toLocaleDateString()}
        </li>
      ))}
    </ul>
  </>
);
