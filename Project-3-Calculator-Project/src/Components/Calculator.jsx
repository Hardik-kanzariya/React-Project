import React,{useState} from 'react';
import "../Components/Calculator.css";
import Button from './Button';
import Input from './input';

const Calculator = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    const handleClick = (value) => {
        if (value === "=") {
            try {
                const Result = eval(input);
                setResult(Result);
            } catch (error) {
                setResult("Error");
            }
        } else if (value === "C") {
            setInput("");
            setResult("");
        }
        else {
            setInput((prev) => prev + value);
        }
    };
    
    const buttons = [
        "7", "8", "9", "/",
        "4", "5", "6", "*",
        "1", "2", "3", "-",
        "0", ".", "%", "+",
        "C","="
    ];

    return (
        <>
        <div className="calculator">
            < Input  input={input} result={result} />
            <div className="buttons">
                {buttons.map((button) => (
                    <Button key={button} value={button} handleClick={handleClick} />
                ))}
                
            </div>
        </div>
        </>
    )
}


export default Calculator;