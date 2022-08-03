/*eslint no-unused-vars: ["error", { "vars": "local" }]*/
/*global some_unused_var */
import React, {useState} from 'react';
import './App.css';
import TodoBoard from "./components/TodoBoard"


// 1. 인풋창이 있고 버튼이 있다.
// 2. 인풋창에 값을 입력하고 버튼을 틀릭하면 아이템이 추가된다.
// 3. 아이템 삭제 버튼을 누르면 삭제가 가능하다.


function App() {
    // eslint-disable-next-line no-unused-vars
    const [inputValue,setInputValue] = useState('')
    const [todoList,setTodoList] = useState([])    
        const addItem = () => {
            console.log("im here!",inputValue)
            setTodoList([...todoList,inputValue])
        }
        return (
            <main>
                <input value = {inputValue} type="text" onChange={(event)=>console.log(event.target.value)}/>
                    <button onClick={addItem}>추가</button>

                    <TodoBoard todoList={todoList}/>
            </main>
        );
}

export default App;