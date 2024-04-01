import { useState } from "react";

export default function NewTask({onAdd}) {

  const [enteredValue, setEnteredValue] = useState('');

  function handleChange(event) {
    setEnteredValue(event.target.value)
  }

  function handleClick() {
    if(enteredValue.trim() === '') {
      return;
    }
    onAdd(enteredValue);
    setEnteredValue('');
  }


  return (
    <div className="flex items-center gap-4">
      <input
        value={enteredValue}
        onChange={handleChange}
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
      <button onClick={handleClick} className="text-stone-700 hover:text-stone-950">Add task</button>
    </div>
  );
}