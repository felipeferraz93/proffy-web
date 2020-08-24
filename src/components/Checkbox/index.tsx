import React, {InputHTMLAttributes} from 'react';

import './styles.css';

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    label: string;

}

const CheckBox: React.FC<CheckBoxProps> = ({label,name,...rest})=> {
    return (
        <div className="checkbox-block">            
            <input type="checkbox" id={name} {...rest} hidden/>
            <label htmlFor={name}></label>
            <label htmlFor={name}>{label}</label>
        </div>
    );
}

export default CheckBox;