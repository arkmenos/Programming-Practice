import React,{useState} from 'react';

function ToDoList(){

    const [tasks, setTasks] = useState(["e", "t"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask])
            setNewTask("");
        }
    }

    function deleteTask(index){
        // setTasks(t => (t.filter(_,i) => i !== index));
        const updatedTask = tasks.filter((_,i) => i!==index);
        setTasks(updatedTask)
    }

    function moveTaskUp(index){
        if(index > 0)
        {
            // const top = tasks[index-1];
            // const bottom = tasks[index];
            // updatedTasks[index] = top;
            // updatedTasks[index-1] = bottom;
            const updatedTasks = [...tasks];
            [updatedTasks[index-1], updatedTasks[index]] =  [updatedTasks[index], updatedTasks[index-1]];
            setTasks(updatedTasks);
        }

    }

    function moveTaskDown(index){
        if(index >= 0 && index < tasks.length-1)
        {
            const updatedTasks = [...tasks];
                [updatedTasks[index+1], updatedTasks[index]] =  [updatedTasks[index], updatedTasks[index+1]];
                setTasks(updatedTasks);
        }
    }

    return(
        <div className="to-do-list">
            <h1>To-D0-List</h1>
            <div>
                    <input type="text" 
                    placeholder='Enter a task..'
                    value={newTask}
                    onChange={handleInputChange}/>
            <button className= "add-button"
            onClick={addTask}>Add</button>
            </div>

            <ol>
                {tasks.map((task, index) => 
                        <li key={index}>
                            <span className='text'> {task}</span>
                            <button className='delete-button'
                                onClick={() => deleteTask(index)}>
                                    Delete
                                </button>
                                <button className='move-button'
                                onClick={() => moveTaskUp(index)}>
                                    Up
                                </button>
                                <button className='move-button'
                                onClick={() => moveTaskDown(index)}>
                                    Down
                                </button>
                        </li>)}
            </ol>
        </div>
    )

}

export default ToDoList