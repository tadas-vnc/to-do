import { useState } from 'react';
import './App.css';

function Name({ task, toggleComplete, removeTask }) {
  return (
    <div className='task'>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={toggleComplete}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.name}
      </span>
      <button onClick={removeTask} style={{ marginLeft: '10px' }}>Remove</button>
    </div>
  );
}

function App() {
  const [tasks, setTasks] = useState([]); 
  const [inputValue, setInputValue] = useState(''); 

  
  const addTask = () => {
    if (inputValue.trim()) { 
      setTasks([...tasks, { name: inputValue, completed: false }]); 
      setInputValue(''); 
    }
  };

  
  const toggleComplete = (index) => {
    const newTasks = tasks.map((task, idx) =>
      idx === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks); 
  };

  
  const removeTask = (index) => {
    const newTasks = tasks.filter((_, idx) => idx !== index); 
    setTasks(newTasks); 
  };

  return (
    <div className="App">
      <div className='input'>
        <textarea
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
        />
        <button onClick={addTask}>Add task</button>
      </div>
      <div className="tasks">
        {tasks.map((task, index) => (
          <Name 
            key={index}
            task={task} 
            toggleComplete={() => toggleComplete(index)} 
            removeTask={() => removeTask(index)} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;
