import { React, useState, useEffect } from 'react'

function useHook() {
    const [list, setlist] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        if (localStorage.getItem("data")) {
            setlist(JSON.parse(localStorage.getItem("data")));
        }
    }, []);

    const addTolocalStorage = () => {
        if (input.trim()) {
            let newTodos = [...list, { todo: input.trim(), id: Date.now() }];
            setlist(newTodos);
            setInput("");
            localStorage.setItem("data", JSON.stringify(newTodos));
        }
    };

    const deleteElement = (id) => {
        let newTodos = list.filter((todo) => todo.id !== id);
        setlist(newTodos);
        localStorage.setItem("data", JSON.stringify(newTodos));

    };
    return [list, setlist, deleteElement, addTolocalStorage, input, setInput];
}

export default useHook;