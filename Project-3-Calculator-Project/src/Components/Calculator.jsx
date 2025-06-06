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
            if(result.length > 0 && !isNaN(value)) {
                setInput(value);
                setResult("");
            }
            else if (result.length > 0 && isNaN(value)) {
                setInput(result + value);
                setResult("");
            }
            else if (input === "" && isNaN(value)) {
                return; // Prevent operator at the start
            }
            else if (input.endsWith("/") && value === "/") {
                return; // Prevent multiple consecutive operators
            }
            else if (input.endsWith("*") && value === "*") {
                return; // Prevent multiple consecutive operators
            }
            else if (input.endsWith("-") && value === "-") {
                return; // Prevent multiple consecutive operators
            }
            else if (input.endsWith("+") && value === "+") {
                return; // Prevent multiple consecutive operators
            }
            else if (input.endsWith("%") && value === "%") {
                return; // Prevent multiple consecutive operators
            }
            else if (input.endsWith(".") && value === ".") {
                return; // Prevent multiple decimal points 
            }
            else if (input === "Error") {
                setInput(value);
                setResult("");
            }
            else if (input === "0" && !isNaN(value)) {
                setInput(value); // Replace leading zero with the new number
            }
            else if (input === "0" && isNaN(value)) {
                return; // Prevent operator after leading zero
            }
            else if (value === "%") {
                const percentage = parseFloat(input) / 100;
                setInput(percentage.toString());
                setResult(percentage.toString());
                return;
            }
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