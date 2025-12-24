import { useState } from "react";
import Balance from "./components/Balance/Balance";
import TransactionsList from "./components/Transaction/TransactionsList";

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  return (
    <div className="p-5">
      <div className="max-w-5xl mx-auto">
        <Balance setTransaction={setTransactions} />
        <TransactionsList
          deleteTransaction={deleteTransaction}
          transactions={transactions}
        />
      </div>
    </div>
  );
};

export default App;
