import React,{useState} from "react";

const MainPage = () => {
    
    const [number, setNumber] = useState("");
    const [result, setResult] = useState("");

    const handleOnChange = (event) => {
        setNumber(event.target.value);
      }; 
      
      console.log("number", number);

      const handleEnter = () => {
        if (number % 2 === 0) {
          setResult(`${number} is an even number`);
        } else {
          setResult(`${number} is an odd number`);
        }
      };

      const handleClear = () => {
        setNumber("");
        setResult('')
      };

  return (
    <React.Fragment>
      <main className="md:w-5/12 md:mx-auto">
        <div className="h-screen centered flex-col space-y-10 bg-gray-500 ">
          <div>
            <input 
            value={number}
            onChange={handleOnChange}
            type="number" 
            className="w-96 h-14 text-3xl rounded" />
          </div>
          <div className="space-x-10">
            <button
            onClick={handleClear}
             className="py-2 px-5 bg-red-500 text-white rounded font-bold">
              Clear
            </button>
            <button
            onClick={handleEnter}
             
             className="py-2 px-5 bg-white text-purple-500 rounded font-bold"
           >
             Enter
           </button>
          </div>
          <div>
          <p className="text-3xl font-bold text-white">{result}</p>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default MainPage;
