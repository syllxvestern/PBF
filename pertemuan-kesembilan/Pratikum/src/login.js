import './HelloComponent.css';
import React, { Component } from 'react';
import './login.css';

export default class login extends Component {
    render() {
        return (
            <div>
                    <form>
                    <h1>Tugas Pertemuan<br></br> Ketiga</h1>
                      <div className="container">
                        <label><b>Username</b></label>
                        <input type="text" placeholder="Masukkan Usename" name="uname" required/>
                        <br></br>
                        <label><b>Password</b></label>
                        <input type="password" placeholder="Masukkan Password anda" name="psw" required/>
                        <button type="submit">Login</button>
                        <input type="checkbox" defaultChecked/> Remember me
                      </div>
                      <div className="container" style={{backgroundColor: '#f1f1f1'}}>
                        <button type="button" className="cancelbtn">Cancel</button>
                      </div>
                    </form>
            </div>
        )
    }
}

