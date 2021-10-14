import React from 'react'

export default function UserForm(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    return(
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
            <h2>User onBoard</h2>
            <button disabled={disabled}>submit</button>

            <div className='errors'>
                <div>{errors.first_name}</div>
                <div>{errors.last_name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.terms}</div>
            </div>
        </div>
        <div className='form-group inputs'>
            <h4>General Information</h4>
            <label>Name
                <input
                    value={values.first_name}
                    onChange={onChange}
                    name='first_name'
                    type='text'
                />
            </label><br/>
            <label>Last Name
                <input
                    value={values.last_name}
                    onChange={onChange}
                    name='last_name'
                    type='text'
                />
            </label><br/>

            <label>Email
                <input
                    value={values.email}
                    onChange={onChange}
                    name='email'
                    type='text'
                />
            </label><br/>
            <label>Password
                <input
                    value={values.password}
                    onChange={onChange}
                    name='password'
                    type='password'
                />
            </label><br/>
                
                <label>Terms
                    <input
                        type="checkbox"
                        name="terms"
                        onChange={onChange}
                        checked={values.terms}
                    />
                </label>
            </div>
        </form>
    )
}

