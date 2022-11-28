import React from 'react'
import '../styles/ResetPassword.scss'

const ResetPassword = () => {
    return (
        <div className="wrapper-newPassword">
            <div className="form-container">
                <img src="./logos/logo_yard_sale.svg" alt="" className="logo" />
                <h1 className="title">Create a new password</h1>
                <p className="subtitle">Entre a new password for your account</p>

                <form action="" className="form">
                    <label htmlFor="password" className="label">Password</label>
                    <input
                        type="text"
                        id="password"
                        placeholder="*****"
                        className="input input-password"
                    />
                    <label htmlFor="new-password" className="label">Re-enter password</label>
                    <input
                        type="text"
                        id="password"
                        placeholder="*****"
                        className="input input-password"
                    />

                    <input type="submit" value="Confirm" className="primary-button login-button" />
                </form>
            </div>
        </div>
    );
}

export default ResetPassword;