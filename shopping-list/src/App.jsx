// first real react project with GDSC guelph Nov 18 2024 
//coming from flutter background so want to compare
// hot reload is better here i dont have to type "r"
// Dart > JS

// Step 4. Import React and useState
import React, {useState} from 'react';
// Step 5. Import the App.css file
import './App.css'
// Step 6. Create a functional component called App

// main method to call subcomponents 
export default function App(){
    // use state is a hook 
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState(' ');

    //onChange is HTML attribute that detects when a tag changes
    //this gets called when Onchanged happens, as specified bu HTML
    const handleInputChange = (e) => {
        
        setInputValue(e.target.value);
    };

    const handleAddTask = () => {
        if (inputValue.trim()){
            // ... is spread operator
            // arrays are immutable
            // copies array into temp variable and adds value
            // tasks and index are params for function
            setTasks([...tasks, inputValue]);
            setInputValue('');
        }
    };

    const handleDeleteTask = (index) => {
        // copies all of tasks except one of given index
        // essentially deletes element at index to array
        const newTaskList = tasks.filter((task, i) => i !== index)

        setTasks(newTaskList);
    };

    return (
        //open div list 
        // curly brakcet in html code for variale value, handled by javascript
        // <ul> means "unordered list"
        // we are mapping tasks to an index 0-n
        // key is required for mapping
        <div className = 'list'>
            <h1> Shopping List</h1>
            <div className = 'input'>
                <input 
                    type = 'text'
                    value = {inputValue}
                    onChange = {handleInputChange}
                    placeholder = 'enter an item'
                />

                <button onClick = {handleAddTask}> Add </button>


            </div>
            
            <ul>
                {tasks.map((task, index) => (
                    <li key = {index} className = 'task-item'>
                        {task}
                        <div className = 'task-actions'>
                            <button onClick = {() => handleDeleteTask(index)}> Purchase </button>
                        </div>
                    </li>
                    
                ))}
            </ul>
        
        </div>
        //close div
    );
}
    // Step 8a. Initialize useState state variables    
    // Step 8b. Create arrow function 'handleInputChange to store the current user input
   
    
    // Step 9. Create arrow function 'handleAddTask' to add tasks to the list
    

    // Step 11. Create arrow function 'handleDeleteTask' with parameter 'index' to delete tasks
   
        // Step 11a. Create a new list of items to keep

        // Step 11b. Set the list to our new list

    // Step 7. Return the JSX for the App component

        // Step 7a. Create a div with className 'list' and create a site header
        