import { useState } from "react";

function TaskInput({addTask, head, subclass}) {
    const [value, setValue] = useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const handleClick = () => {
        if (value !== '') {
            addTask(value);
            setValue('');
        }

    }
    return (
        <div className={head}>
            <input value={value} onChange={handleChange} className={subclass} placeholder="Write task"/>
            <button onClick={handleClick} type="submit">Add</button>
        </div>
    )
}

export default TaskInput;