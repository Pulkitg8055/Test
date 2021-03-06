import React from 'react';

// Its a controlled form
const FormGroup = ({
	Id,
	Label,
	Type,
	onChange,
	Value,
	defaultValue,
	Checked,
	defaultChecked,
	Desc,
}) => {
	return (
		<div className='form-group'>
			<label htmlFor={Id}>{Label}</label>
			<input
				type={Type}
				className='form-control'
				id={Id}
				name={Id}
				onChange={onChange}
				value={Value}
				defaultValue={defaultValue}
				checked={Checked}
				defaultChecked={defaultChecked}
				aria-describedby={Id + 'Help'}
				autoComplete={
					Type.toLowerCase() === 'password' ? 'cc-pass' : 'meh'
				}
			/>
			{Desc && (
				<small id={Id + 'Help'} className='form-text text-muted'>
					{Desc}
				</small>
			)}
		</div>
	);
};

export default FormGroup;
