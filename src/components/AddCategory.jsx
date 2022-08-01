import { useState } from "react";

export default function AddCategory({onNewValue}) {
    const [inputValue, setInputValue] = useState('');
    const onChangeInput = ({target})=>{
        setInputValue(target.value)
    }
    const onSubmit = (event)=>{
        event.preventDefault();
        if(inputValue.trim().length < 1) return;
        onNewValue(inputValue);
        setInputValue('');
    }
    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text" 
                placeholder="Buscar GIF" 
                value={inputValue} 
                onChange={onChangeInput}
            />
        </form>
    )
}
