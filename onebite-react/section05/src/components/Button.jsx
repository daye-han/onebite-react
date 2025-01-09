const Button = ({ text, color = "black", children }) => {
    
    return (
        <button
            onClick = {() => {
                console.log(text);
            }}
        style={{color:color}}>
            {text} - {color}
            {children}
        </button>
    )
}

/* Button.defaultProps = {
    color : "black",
}
 */
export default Button;