import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

function Register(){
    const [user, setUser] = useState({
       firstName:'', lastName: '', email:'', password: '', mobileNo: ''
    })

    const onChangeInput = e => {
        const {name, value} = e.target;
        setUser({...user, [name]: value})
    }

    const registerSubmit = async e =>{
        e.preventDefault()
        try {
            await axios.post('/user/register', {...user})

            localStorage.setItem('firstLogin', true)
            
            Swal.fire({
                title: 'Thank you for Registering!',
                icon: 'success',
                text: 'Welcome to Indu-streets'
            })
            .then(() => {
                window.location.href = "/";
            })
        } catch (err) {
       
            Swal.fire({
                title: err.response.data.msg,
                icon: 'error'
             })
           
        }
    }

    return(
        <div className="login-page">
            <form onSubmit={registerSubmit}>
                <h2>Register</h2>

                <input type="text" name="firstName" required
                placeholder="Enter your first name" value={user.firstName} onChange={onChangeInput} />

                <input type="text" name="lastName" required
                placeholder="Enter your last name" value={user.lastName} onChange={onChangeInput} />

                <input type="text" name="mobileNo" required
                placeholder="Enter your mobile number" value={user.mobileNo} onChange={onChangeInput} maxLength="11" pattern="\d{11}" />
                
                <input type="email" name="email" required
                placeholder="Enter your email" value={user.email} onChange={onChangeInput} />

                <input type="password" name="password" required autoComplete="on"
                placeholder="Enter your password" value={user.password} onChange={onChangeInput} />

                

                <div className="row">
                    <button type="submit">Register</button>
                    <Link to="/login">Login</Link>
                </div>
            </form>
    </div> 
    )
}

export default Register