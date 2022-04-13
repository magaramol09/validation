import { Formik, Form, Field, ErrorMessage } from 'formik'
import React from 'react'
import * as yup from 'yup'
import "yup-phone";


export default function Main() {
    const defaultValue = {
        fname: "",
        lname: "",
        email: "",
        contact: "+91 ",
        password: "",
        cpassword: "",
    }
    const validationSchema = yup.object().shape({
        // First Name validation
        fname: yup.string()
        .required("First name Is A Required Field")
        .min(3 , 'first name is too short' )
        .max(12 , 'first name is too big' ),
        

        // Last Name validation
        lname: yup.string()
        .required("last name Is A Required Field")
        .min(3 , 'Last name is too short' )
        .max(12 , 'Last name is too long' ),
        

        // Email validation
        email: yup.string()
        .required("email  Is A Required Field").email("Please enter valid email"),
        // Contact Number validation
        contact: yup.string()
            .phone("IN", true, "That doesn't look like a phone number")
            .required('A phone number is required'),

        // Password validation
        password: yup
            .string()
            .required('Please enter your password.')
            .min(8, 'Your password is too short.')
            .max(10, 'Your password is too long.'),

        // Confirm Password valdition
        cpassword: yup
            .string()
            .required('Please retype your password.')
            .oneOf([yup.ref('password')], 'Your passwords do not match.')

    })
    const handelSubmit = (values) => {
        console.log(values);
    }
    return (
        <div>
            <div className="container">
                <h1>Create a Account</h1>
                {/* <p>For the best experience on our site</p> */}
                <Formik initialValues={defaultValue}
                    validationSchema={validationSchema}
                    onSubmit={handelSubmit}>
                    <Form>
                        <div className="row">
                            <div className="column">
                                <label >First Name</label>
                                <Field type="text" name="fname" id="name" placeholder="Your name here" />
                                <label className='valid'><ErrorMessage name='fname' /></label>
                            </div>
                            <div className="column">
                                <label >Last Name</label>
                                <Field type="text" name="lname" placeholder="Your name here" />
                                <label className='valid' ><ErrorMessage name='lname' /></label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="column">
                                <label >Email</label>
                                <Field type="email" name="email" id="email" placeholder="Your email here" />
                                <label className='valid' ><ErrorMessage name='email' /></label>
                            </div>
                            <div className="column">
                                <label >Contact Number</label>
                                <Field type="tel" name="contact" id="contact" placeholder="Your phone number here" />
                                <label className='valid' ><ErrorMessage name='contact' /></label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="column">
                                <label>Password</label>
                                <Field type="Password" name="password" id="Password" placeholder="Password" />
                                <label className='valid' ><ErrorMessage name='password' /></label>
                            </div>
                            <div className="column">
                                <label>Confirm Password</label>
                                <Field type="Password" name="cpassword" placeholder="Confirm Password" />
                                <label className='valid' ><ErrorMessage name='cpassword' /></label>
                            </div>
                        </div>
                        <button type='submit'> Submit</button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}
