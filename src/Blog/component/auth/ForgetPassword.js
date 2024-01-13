import React from 'react'
import './ForgetPassword.css'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import *  as yup from "yup"

const ForgetPassword = () => {

    const defaultValue={
        email:'',
    }
    const validationSchema=yup.object().shape({
  email:yup.string().required().email("Please enter your email")
  })

  const handleSubmit=(values)=>{
    console.log(values);
  }
  return (
    <>
    <Formik
       initialValues={defaultValue}
       validationSchema={validationSchema}
       onSubmit={handleSubmit}
    >

    
     <Form className='forget' >
        <div className='forget1'>
            <h1>Forget Password</h1>
            <Field  type='email' placeholder='✉-Enter Email' name="email"/>
            <ErrorMessage  name="email"></ErrorMessage><br></br>
            <button type='submit'>Reset</button>

        </div>
     </Form>
     </Formik>
    </>
  )
}

export default ForgetPassword
