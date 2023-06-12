import styles from "./Select.module.css";

function Select({ text, name, options, handleOnChange, value}){
    return(
        <div className={styles.formControl}>
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name} onChange={handleOnChange} value={value || ''}>
                <option>Selecione uma categoria</option>
                {options.map((option) => (
                <option value={option.numerocategoria} key={option.numerocategoria}>
                {option.thecategoria}
                </option>
            ))}
            </select>
        </div>
    )
}

export default Select;