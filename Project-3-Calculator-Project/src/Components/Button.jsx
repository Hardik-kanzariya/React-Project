import "./Calculator.css";

const Button = ({ value, handleClick }) => {
    const getClass = () => {
        if (value === "=") return "button equals";
        if (value === "C") return "button clear";
        if (["/", "*", "-", "+", "%"].includes(value)) return "button operator";
        return "button number";
    };

    return (
        <button className={getClass()} onClick={() => handleClick(value)}>
            {value}
        </button>
    );
}

export default Button;