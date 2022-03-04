import React, { useEffect, useState } from "react";

export default function Login() {
    const emailPattern = new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")
    const [LoginForm, setLoginForm] = useState({
        Email: "",
        Password: ""
    });
    const [LoginFormErrors, setLoginFormError] = useState({
        EmailError: null,
        PasswordError: null
    });

    useEffect(() => {
        console.log(LoginForm)
    }, [LoginForm])

    const handleFormChange = (e) => {
        if (e.target.id === 'Email') {
            setLoginForm({
                ...LoginForm,
                Email: e.target.value
            })
            setLoginFormError({
                ...LoginFormErrors,
                EmailError: e.target.value.length === 0 ? 'This field is requierd' :
                    emailPattern.test(e.target.value) === false ? 'Email is invalid' :
                        null,
            })

        } else if (e.target.id === 'Password') {
            setLoginForm({
                ...LoginForm,
                Password: e.target.value
            })

            setLoginFormError({
                ...LoginFormErrors,
                PasswordError: e.target.value.length === 0 ? 'This field is requierd' :
                    e.target.value.length < 8 ? 'enter 8 character at least' :
                        null,
            })

        }
    }

    const handleFormSubmit = (e) => {
        console.log(LoginForm)
        e.preventDefault()
    }


    return (
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}></div>

                    <form onSubmit={(e) => handleFormSubmit(e)}>
                        <h3 className="text-center my-5">Login</h3>

                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label"
                            >Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="Email"
                                aria-describedby="emailHelp"
                                value={LoginForm.Email}
                                onChange={(e) => handleFormChange(e)}
                            />
                            <div id="Email" className="text-danger form-text">
                                {LoginFormErrors.EmailError}
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Password" className="form-label"
                            >Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="Password"
                                value={LoginForm.Password}
                                onChange={(e) => handleFormChange(e)}
                            />
                            <div id="Password" className="text-danger form-text">
                                {LoginFormErrors.PasswordError}
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div >
            </div >
        </div >



    )
}