import React, {InputHTMLAttributes} from 'react';

import './styles.css';

interface InputLoginPasswordProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    label?: string;

}

const Input: React.FC<InputLoginPasswordProps> = ({label,name,...rest})=> {
    return (
        <div className="inputPassword-block">
            <label htmlFor={name}>{label}</label>
            <input type="password" id={name} {...rest}/>
        </div>
    );
}

export default Input;
