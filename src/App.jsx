import React, { useState } from "react";


// State to manage the display
function App() {
  const [display, setDisplay] = useState(""); 
  const [history, setHistory] = useState([]); 

  // Function to handle button clicks for numbers and operators
  const handleButtonClick = (value) => {
    setDisplay((prevDisplay) => prevDisplay + value);
  };
   // Function to evaluate the expression and store history
   const handleEqualClick = () => {
    try {
      const result = eval(display).toString();
      setHistory([...history, `${display} = ${result}`]); // Save to history
      setDisplay(result);
    } catch (error) {
      setDisplay("Error");
    }
  };

  

  // Function to clear the display
  const handleClearClick = () => {
    setDisplay(""); // Reset the display
  };
   // Function to clear history
   const clearHistory = () => {
    setHistory([]);
  };

  return (
   
      <div className="flex items-start space-x-10 justify-center min-h-screen bg-gray-900 p-4">
      {/* History Section - OUTSIDE the calculator */}
      <div className="bg-white  shadow-md rounded-lg p-3  mr-6 w-90">
        <h2 className="text-lg font-bold mb-2">History</h2>
        <div className="h-32 overflow-y-auto border p-2 rounded">
          {history.length > 0 ? (
            history.map((item, index) => (
              <p key={index} className="text-gray-700 text-sm">{item}</p>
            ))
          ) : (
            <p className="text-gray-500 text-sm">No history yet.</p>
          )}
        </div>
        {history.length > 0 && (
          <button
            className="text-sm text-red-500 cursor-pointer mt-2 hover:underline"
            onClick={clearHistory}
          >
            Clear History
          </button>
        )}
      </div>

      {/* Calculator Box */}
      <div className="bg-white p-6  rounded-lg shadow-lg w-90 mb-10">
        <h1 className="text-3xl font-bold text-center mb-4">CALCULATOR</h1>

        {/* Display Screen */}
        <div className="w-full h-16 bg-gray-100 text-4xl text-right p-4 rounded-lg mb-4">
          {display || "0"}
        </div>

        {/* Buttons Grid */}
        <div className="grid grid-cols-3 gap-2">
          {/* Number Buttons */}
          {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map((number) => (
            <button
              key={number}
              className="p-4 text-2xl cursor-pointer bg-gray-500 text-white rounded-lg hover:bg-blue-700"
              onClick={() => handleButtonClick(number.toString())}
            >
              {number}
            </button>
          ))}

          {/* Operator Buttons */}
          {["+", "-", "*", "/"].map((operator) => (
            <button
              key={operator}
              className="p-4 text-2xl cursor-pointer bg-gray-600 text-white rounded-lg hover:bg-blue-700"
              onClick={() => handleButtonClick(operator)}
            >
              {operator}
            </button>
          ))}

          {/* Clear Button */}
          <button
            className="p-4 cursor-pointer text-2xl bg-red-600 text-white rounded-lg hover:bg-red-800"
            onClick={handleClearClick}
          >
            C
          </button>

          {/* Equal Button */}
          <button
            className="col-span-3 cursor-pointer p-4 text-2xl bg-green-600 text-white rounded-lg hover:bg-green-800"
            onClick={handleEqualClick}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
