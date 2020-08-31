import Transaction from '../models/Transaction';
import { uuid } from 'uuidv4';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface RequestDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    // TODO
  }

  public getBalance(): Balance {
    // TODO
  }

  public create({title, value, type}: RequestDTO): Transaction {
    const transaction = {
      id: uuid(),
      title,
      value,
      type
    };

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
