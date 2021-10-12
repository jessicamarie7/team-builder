import React from "react";
import NewPerson from "./NewPerson";

export default function NewForm(props) {
    const { values, update, submit, errorText } = props

    const onChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        update(value, name)
    }

    const onSubmit = event => {
        event.preventDefault();
        submit();
    }
    


    return (
        <form className='form-container' onSubmit={onSubmit}>
            <h2 className='error'>{errorText}</h2>
            <div className='form inputs'>
                <label> Full Name
                    <input 
                        type='text'
                        name='coworker'
                        value=''
                        onChange=''
                        placeholder='Please enter your name here'
                    />
                </label>
                <label> Department
                        <select  value={values.department} name="department" onChange={onChange}>
                            <option value="">~~Select your department~~</option>
                            <option value="Finance">Finance</option>
                            <option value-="Technology">Technology</option>
                        </select>
                </label>
            </div>
        </form>
    )
}