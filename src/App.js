import './App.css';
import { Navbar, TaskPanel } from './components';
function App() {
    return(
        <div className="App">
            <Navbar class='navbar'/>
            <TaskPanel class='task-section' tasks='tasks' NA='n-a'/>
        </div>
    )
}

export default App;