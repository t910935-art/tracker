import { TrashIcon } from "lucide-react";

const TransactionCard = ({ transaction, deleteTransaction }) => {
  const { description, amount, type, category, id } = transaction;
  return (
    <div className="flex flex-col gap-3 border-b border-gray-200 mb-3 p-2 hover:bg-gray-100">
      <div className="flex justify-between items-center">
        <div className="">
          <h2
            className={`text-xl font-bold ${
              type === "Income" ? "text-green-500" : "text-red-500"
            } `}
          >
            {description}
          </h2>
          <p className="text-gray-500">{category}</p>
        </div>
        <div className="flex items-center gap-5"></div>
        <h2
          className={`text-xl font-bold ${
            type === "Income" ? "text-green-500" : "text-red-500"
          }`}
        >
          {Number(amount).toFixed(2)}
        </h2>
        <button
          onClick={() => deleteTransaction(id)}
          className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
        >
          <TrashIcon className="w-6 h-6 " />
        </button>
      </div>
    </div>
  );
};

export default TransactionCard;
