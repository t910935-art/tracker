import { useState } from "react";

const CreateTransactionForm = ({ setTransaction }) => {
  const [formData, setFormData] = useState({
    type: "Income",
    amount: 0,
    category: "",
    description: "",
    date: new Date().toISOString().split("T")[0],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTransaction((prev) => [...prev, { ...formData, id: Date.now() }]);
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Create New Transaction
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center">
          <div className="flex gap-4 mb-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="type"
                value="Expense"
                checked={formData.type === "Expense"}
                className="mr-2"
                onChange={handleChange}
                required
              />
              <span className="text-red-500 font-medium">Expense</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="type"
                value="Income"
                checked={formData.type === "Income"}
                className="mr-2"
                onChange={handleChange}
                required
              />
              <span className="text-green-500 font-medium">Income</span>
            </label>
          </div>
        </div>
        <div>
          <label htmlFor="amount" className="block text-gray700 mb-2">
            Amount
          </label>
          <input
            type="number"
            name="amount"
            id="amount"
            required
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="category">
            Category
          </label>
          <select
            name="category"
            id="category"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            onChange={handleChange}
          >
            <option value="">Select a category</option>
            {[formData.type].map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-gray-700 mb-2" htmlFor="description">
            Description
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="description"
            id="description"
            value={formData.description}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="date">
            Date
          </label>
          <input
            type="date"
            id="date"
            onChange={handleChange}
            name="date"
            value={formData.date}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className={`w-full py-2 px-4 rounded-md text-white font-medium ${
            formData.type === "Expense"
              ? "bg-red-500 hover:bg-red-600"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          Add {formData.type === "Expense" ? "Expense" : "Income"}
        </button>
      </form>
    </div>
  );
};

export default CreateTransactionForm;
