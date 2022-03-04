import React, { useEffect, useState } from "react";

export default function Register() {
    const emailPattern = new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")
    const userNamePattern = new RegExp("^[a-z]*$")
    const PassPattern = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')
    const [RegistForm, setRegistForm] = useState({
        Name: "",
        Email: "",
        Username: "",
        Password: "",
        Confirmpassword: ""

    });
    const [RegistFormErrors, setRegistFormError] = useState({
        NameError: null,
        EmailError: null,
        UsernameError: null,
        PasswordError: null,
        ConfirmpasswordError: null
    });

    useEffect(() => {
        console.log(RegistForm)
    }, [RegistForm])

    const handleFormChange = (e) => {
        if (e.target.id === 'Name') {
            setRegistForm({
                ...RegistForm,
                Name: e.target.value
            })
            setRegistFormError({
                ...RegistFormErrors,
                NameError: e.target.value.length === 0 ? 'This field is requierd' :
                    null,
            })
        } else if (e.target.id === 'Email') {
            setRegistForm({
                ...RegistForm,
                Email: e.target.value
            })
            setRegistFormError({
                ...RegistFormErrors,
                EmailError: e.target.value.length === 0 ? 'This field is requierd' :
                    emailPattern.test(e.target.value) === false ? 'Email is invalid' :
                        null,
            })

        } else if (e.target.id === 'Username') {
            setRegistForm({
                ...RegistForm,
                Username: e.target.value
            })
            setRegistFormError({
                ...RegistFormErrors,
                UsernameError: e.target.value.length === 0 ? 'This field is requierd' :
                    userNamePattern.test(e.target.value) === false ? 'Username contains no spaces' :
                        null,
            })

        } else if (e.target.id === 'Password') {
            setRegistForm({
                ...RegistForm,
                Password: e.target.value
            })

            setRegistFormError({
                ...RegistFormErrors,
                PasswordError: e.target.value.length === 0 ? 'This field is requierd' :
                    PassPattern.test(e.target.value) === false ? ' Password length not less than 8 characters , contains at least one lowercase , one uppercase , at least one digit and special character' :
                        null,
            })

        } else if (e.target.id === 'Confirmpassword') {
            setRegistForm({
                ...RegistForm,
                Confirmpassword: e.target.value
            })

            setRegistFormError({
                ...RegistFormErrors,
                ConfirmpasswordError: e.target.value.length === 0 ? 'This field is requierd' :
                    e.target.value !== RegistForm.Password ? 'Passwords do not match' :
                        null,
            })

        }
    }

    const handleFormSubmit = (e) => {
        console.log(RegistForm)
        e.preventDefault()
    }


    return (
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}></div>

                    <form onSubmit={(e) => handleFormSubmit(e)}>
                        <h3 class="text-center my-5">Register</h3>
                        <div class="m-4">
                            <div class="mb-3">
                                <label for="Name" class="form-label">Name</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="Name"
                                    aria-describedby="Name"
                                    formControlName="Name"
                                    value={RegistForm.Name}
                                    onChange={(e) => handleFormChange(e)}
                                />
                                <div id="Name" className="text-danger form-text">
                                    {RegistFormErrors.NameError}
                                </div>

                            </div>

                            <div class="mb-3">
                                <label for="Email" class="form-label">Email</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="Email"
                                    aria-describedby="Email"
                                    formControlName="Email"
                                    value={RegistForm.Email}
                                    onChange={(e) => handleFormChange(e)}

                                />
                                <div id="Email" className="text-danger form-text">
                                    {RegistFormErrors.EmailError}
                                </div>

                            </div >

                            <div class="mb-3">
                                <label for="Username" class="form-label">Username</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="Username"
                                    aria-describedby="Username"
                                    formControlName="Username"
                                    value={RegistForm.Username}
                                    onChange={(e) => handleFormChange(e)}

                                />
                                <div id="Username" className="text-danger form-text">
                                    {RegistFormErrors.UsernameError}
                                </div>

                            </div >

                            <div class="mb-3">
                                <label for="Password" class="form-label">Password</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="Password"
                                    aria-describedby="Password"
                                    formControlName="Password"
                                    value={RegistForm.Password}
                                    onChange={(e) => handleFormChange(e)}

                                />
                                <div id="Password" className="text-danger form-text">
                                    {RegistFormErrors.PasswordError}
                                </div>

                            </div >

                            <div class="mb-3">
                                <label for="Confirmpassword" class="form-label"
                                >Confirmpassword</label
                                >
                                <input
                                    type="text"
                                    class="form-control"
                                    id="Confirmpassword"
                                    aria-describedby="Confirmpassword"
                                    formControlName="Confirmpassword"
                                    value={RegistForm.Confirmpassword}
                                    onChange={(e) => handleFormChange(e)}

                                />
                                <div id="Confirmpassword" className="text-danger form-text">
                                    {RegistFormErrors.ConfirmpasswordError}
                                </div>

                            </div >
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div >
                    </form >
                </div >
            </div >
        </div >



    )
}
