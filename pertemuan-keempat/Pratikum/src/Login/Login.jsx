import React, { Component } from 'react';
import './Login.css'

class Login extends Component {
    render() {
        return (
            <div className="kotak_login">
                <div>
                    <div className="col-md-6">
                        <h2 className="tugas">Tugas Pertemuan Ketiga</h2>
                            <form>
                                <label><b>Username</b></label>
                                <input type="text" placeholder="Enter Username" className="form_login" required/>
                            
                                <label ><b>Password</b></label>
                                <input type="password" placeholder="Enter Password" className="form_login" required/>

                                <button type="submit" class="btn btn-primary btn-lg btn-block" checked ="checked" >Login</button>

                                <input type="checkbox" className="check" id="exampleCheck1"/>
                                <label className="check" for="exampleCheck1">Remember Me!</label>
                                <div className="container">
                                    <button type="button" class="cancelbtn">Cancel</button>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login