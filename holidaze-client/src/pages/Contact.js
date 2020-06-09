import React from 'react';
import { useForm } from 'react-hook-form';
// I see no real advantage in using useForm when posting to local json using action prop,
//as error handeling only gets triggered when onSubmit is called.

export default function Contact() {
	const { register, handleSubmit, errors } = useForm();
	console.log('Errors present:', errors);

	return (
		<div>
        <div className='pushbox'></div>
		<div className='contactForm'>
			<h1>Send us a message:</h1>

			<form className='[ formGrid ]' action='http://192.168.64.2/holidaze/contact-success.php' method='post' onFocus={handleSubmit()} >
				<div className='[ inputContainer ][ formGrid__Number2 ]'>
					<h4>Please enter your name:</h4>
					<input
						className='inputContainer__inputfield--left'
						type='text'
						placeholder='Full name'
						name='clientName'
						ref={register({ required: true })}
					/>
					{errors.clientName && (
						<p className='inputContainer__errorMessage'>
							Your name is required
						</p>
					)}
				</div>

				<div className='[ inputContainer ][ formGrid__Number1 ]'>
					<h4>Please enter your email:</h4>
					<input
						className='inputContainer__inputfield'
						type='email'
						placeholder='Email'
						name='email'
						ref={register({
							required: true,
							pattern: /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+.([A-Za-z]{2,4})$/i,
						})}
					/>
					{errors.email && (
						<p className='inputContainer__errorMessage'>
							Your email is required
						</p>
					)}
				</div>
				<div className='[ inputContainer ][ formGrid__Number12 ]'>
					<h4>Please enter your message:</h4>
					<textarea
						className='inputContainer__messagefield'
						name='message'
						ref={register({ required: true, maxLength: 800 })}
					/>
					{errors.message && (
						<p className='inputContainer__errorMessage'>
							You can not submit an empty message.
						</p>
					)}
				</div>
				<div className='[ formGrid__Number13 ]'>
					<input className='[ inputContainer__submit ]' type='submit' />
				</div>
			</form>
		</div>
		</div>
	);
}
