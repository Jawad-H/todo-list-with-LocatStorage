import { React, useState, useEffect } from 'react'
import styled from "styled-components";
import { BsFillTrashFill } from "react-icons/bs";
import useHook from './Add';
function Home() {
    const [list, setlist, deleteElement, addTolocalStorage, input, setInput] = useHook();


    return (
        <Wrapper>
            <div className="container">
                <h1>Todo App</h1>
                <div className="form-container">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input type="text" className="input" placeholder="Enter" value={input} onChange={(e) => setInput(e.target.value)} />
                        <button className="submit" onClick={addTolocalStorage}>add</button>
                    </form>
                </div>
                <div className="result-container">
                    {list.map((data) => {
                        return (
                            <div key={data.id} className="show-container">
                                <div className="result-show">
                                    <h3 >{data.todo}</h3>
                                </div>
                                <div className="result-remove">
                                    <BsFillTrashFill className="trash" onClick={() => deleteElement(data.id)} />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Wrapper>

    )
}

const Wrapper = styled.section`
.container{
    margin-top:50px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
}
.trash{
    font-size:20px;
    cursor:pointer;
}
.show-container{
    display:flex;
}
.result-show{
    padding-right:10px;
}
.input{
    padding:10px;
    border:none;
    background-color:lightgray;
   
}
.submit{
    padding:10px;
    background-color:blue;
    border:none;
}
h1{
    margin-bottom:30px;
}
.result-container{
    margin-top:20px;
}
`


export default Home;