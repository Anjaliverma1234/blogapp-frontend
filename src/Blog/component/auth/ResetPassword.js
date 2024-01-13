import React from 'react'
import './ResetPassword.css'
import { Formik,Form, Field, ErrorMessage} from 'formik'
import *  as yup from "yup"

const ResetPassword = () => {
     const defaultValue={
    password:"",
    cpassword:"",
  }

 const validationSchema=yup.object().shape({
  password:yup.string().required("Please enter your password"),
  cpassword:yup.string().required("please enter confirm password")
  })

  const handleSubmit=async(values)=>{
    console.log("values",values);
  }
  return (
    <>
    <Formik
       initialValues={defaultValue}
       validationSchema={validationSchema}
       onSubmit={handleSubmit}
    >
      <Form className='reset'>
        <div className='reset1'>
           <h1>Reset Password</h1> 
           <Field type='password' placeholder='Password' name='password'/>
           <ErrorMessage name='password'></ErrorMessage>
           <Field  type='password' placeholder='Confirm Password' name='cpassword'/>
           <ErrorMessage name='cpassword'></ErrorMessage>
           <button type='submit'>Reset</button>
        </div>
      </Form>
      </Formik>
    </>
  )
}

export default ResetPassword

