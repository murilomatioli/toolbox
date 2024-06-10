import React from "react";
import { useEffect, useState } from "react";
import styles from './pagesStyles/calculadora.module.css'

const Operations = () => {
    
    const [number, setNumber] = useState('');
    const [number2, setNumber2] = useState('');
    const [result, setResult] = useState('');

    let n1;
    let n2;

    const handleFirstValueChange = (e) => {
        setNumber(e.target.value);
    }
    const handleSecondValueChange = (e) => {
        setNumber2(e.target.value);
    }
    const Somar = () => {
        n1 = Number(number);
        n2 = Number(number2);

        console.log(`Value 1: ${n1}`)
        console.log(`Value 2: ${n2}`)
        setResult(n1 + n2)
        console.log(`Soma: ${n1 + n2}`)
    }
    return(
        <>
        <div className={styles.contentContainer}>
            <h3>Operações</h3>
            <input type="number" className={styles.numberInput} value={number} onChange={handleFirstValueChange} />
            <input type="number" className={styles.numberInput} value={number2} onChange={handleSecondValueChange} />

            <div className={styles.operacoes}>
                <input type="button" className={styles.operation} value='Somar' onClick={Somar}/>
                <input type="button" className={styles.operation} value='Subtrair' onClick={Somar}/>
                <input type="button" className={styles.operation} value='Multiplicar' onClick={Somar}/>
                <input type="button" className={styles.operation} value='Dividir' onClick={Somar}/>
            </div>

            <h4 className={styles.result} value={result}>Resultado: {result}</h4>
        </div>
        </>
    )
}




export default Operations