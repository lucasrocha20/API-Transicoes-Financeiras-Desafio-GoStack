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
    return this.transactions;
  }

  public getBalance(): Balance {
    let income = 0;
    let outcome = 0;
    let total = 0;

    this.transactions.forEach(item => {
      switch (item.type) {
        case 'income':
          income += item.value;
          break;
        case 'outcome':
          outcome += item.value;
      }
    });

    total = income - outcome;

    const result = { income, outcome, total }

    return result;
  }

  public create({ title, value, type }: RequestDTO): Transaction {
    const transaction = new Transaction({
      title,
      value,
      type
    });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
