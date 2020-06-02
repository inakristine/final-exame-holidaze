import React, { useState } from 'react';
import Contacts from '../json/contact.json';
import Bookings from '../json/enquiries.json';
import BookingsList from '../components/bookingsList';
import ContactList from '../components/contactList';


export default function AdminLogin() {
    let passWord = localStorage.getItem('password')
    let userName = localStorage.getItem('username')

    let [username, setUsername] = useState(userName);
    let [password, setPassword] = useState(passWord);
    let [usernameInput, setUsernameInput] = useState("");
    let [passwordInput, setPasswordInput] = useState("");
    let [loginstatus, setLoginstatus] = useState(false);
    let [errorMessage, setErrorMessage] = useState("");

    let [bookings, setBookings] = useState(Bookings);
    console.log('Her er bookingdata', bookings);

    let [contacts, setContacts] = useState(Contacts);
    console.log('Her er kotaktdata', contacts);


    const handleChange = (input) => {
        let name = input.target.name;
        let value = input.target.value;

        switch (name) {
            case 'username': setUsernameInput(value);
                break;
            case 'password': setPasswordInput(value);
                break;
            default:
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        (usernameInput === username && passwordInput === password) ? (setLoginstatus(true)) : setErrorMessage('Either yor username or yur password is incorrect');
    }

    const logOutHandler = () => {
        setLoginstatus(false);
    }

   

    return <div>{(loginstatus && <div className='admincontainer'>
    
        
    <button
    className='logout'
    onClick={logOutHandler}>Log Out
</button><h1>Admin dashboard:</h1>

        <div className='[ dashboard ]'>

        <div className='dashboard__messages'>
        {contacts !== undefined ? (
            contacts.reverse().map((value, index) => {
                return (
                    <div key={index}>
                        <ContactList
                            clientName={value.clientName}
                            email={value.email}
                            message={value.message}
                            key={index}
                        />
                    </div>
                );
            })
        ) : (
                <div>Waiting for bookings to apair</div>
            )}
       
        </div>

            <div className='dashboard__bookings'>
            {bookings !== undefined ? (
                bookings.reverse().map((value, index) => {
                    return (
                        <div key={index}>
                            <BookingsList
                                id={value.clientName}
                                establishment={value.establishment}
                                clientName={value.clientName}
                                email={value.email}
                                checkin={value.checkin}
                                checkout={value.checkout}
                                adults={value.adults}
                                children={value.children}
                                notes={value.notes}
                                key={index}
                            />
                        </div>
                    );
                })
            ) : (
                    <div>Waiting for bookings to apair</div>
                )}
           
            </div>

            <div className='dashboard__listings'>
            </div>
        </div>

    </div>) || <div className='admincontainer'>
            <h1>Login</h1>
            <p className='errorMessage'>{errorMessage}</p>

            <form className='[ formGrid ][ loginForm ]' onSubmit={handleSubmit}>

                <div className='[ formGrid__Number2 ]'>
                    <p>Enter your username</p>
                    <input
                        className='[ loginForm__inputfield ]'
                        type='text'
                        name='username'
                        onChange={handleChange}
                    />
                </div>

                <div className='[ formGrid__Number1 ]'>
                    <p>Enter your password</p>
                    <input
                        className='[ loginForm__inputfield ]'
                        type='password'
                        name='password'
                        onChange={handleChange}
                    />
                </div>

                <div className='[ formGrid__Number14 ]'>
                    <input className='[ loginForm__submit ]' type='submit' />
                </div>

            </form>
        </div>}</div>;
}