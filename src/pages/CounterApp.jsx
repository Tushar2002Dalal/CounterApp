import React, { useState } from "react";
import Message from "../components/Message";
import Button from "../components/Button";

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const plus = () => {
    setCount(count + 1);
    console.log("Plus Button Clicked", count);
  };
  const minus = () => {
    setCount(count - 1);
    if (count === 0) {
      setCount(0);
    }
    console.log("Plus Button Clicked", count);
  };
  return (
    <div>
      <Message
        msg="Counter App"
        class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-red-500 md:text-5xl lg:text-6xl dark:text-white margin-bottom "
      />
      <Message
        msg="Count Value is "
        val={count}
        class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-blue-900 md:text-5xl lg:text-6xl dark:text-white margin-bottom "
      />
      <Button
        val="Increase Value By 1"
        fn={plus}
        class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      />
      <Button
        val="Decrease Value By 1"
        fn={minus}
        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 0 margin-right"
      />
    </div>
  );
};

export default CounterApp;
