import React, { useEffect, useState } from 'react'
import './Signup.css'
import {Field, Form, Formik,ErrorMessage} from 'formik'
import * as yup from 'yup'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import {ToastContainer,toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { SignUpUser,clearState } from '../../features/auth/authSlice'


const Signup = () => {

  const dispatch = useDispatch();

    const [pic,setPic]=useState("")
    const data=useSelector((state)=>state.user)
    const{error,message,loading}=data
    useEffect(()=>{
      if(error){
        toast.error(error,{position:toast.POSITION.TOP_CENTER});
        setTimeout(()=>{
        dispatch(clearState());
      },500)
      }
      if(message){
        toast.success(message,{position:toast.POSITION.TOP_CENTER});
        setTimeout(()=>{
        dispatch(clearState());
      },500)
      }
    })
     const initialState={
        userName:'',       
        userEmail:'',
        userPhone:'',
        userPassword:'',
        userCity:'',
        userState:''
     }
     const validationSchema= yup.object().shape({
        userName:yup.string().required("please enter your name"),
        userEmail:yup.string().required().email("please enter your email"),
        userPhone: yup.string().required("please enter your contact"),
        userPassword:yup.string().required("please enter your password").min(8,"password must be a 8 char"),
        userCity:yup.string().required("please enter your city"),
        userState:yup.string().required("please enter your state")
      })
    const handleSubmit=(values)=>{
        let obj={  
          profilePic:pic,
            ...values,      
           }
           console.log(obj) 
           dispatch(SignUpUser(obj));
      }
      const picSelect=(e)=>{
        setPic(e.target.files[0]);
       
      }



  return (
    <>
    <ToastContainer/>
       <Formik 
            initialValues={initialState}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
    >
    <div className='main'>
    <div className='signup'>
        <h1> Sign Up</h1>
       <Form>   
                  <Field type='Text' placeholder='Full Name' name="userName"></Field><br></br><br></br>
                  <ErrorMessage name="userName"></ErrorMessage>
                  <Field type='Text' placeholder='Email ID' name="userEmail"></Field><br></br><br></br>
                  <ErrorMessage name="userEmail"></ErrorMessage>
                  <Field type='Text' placeholder='Phone Number ' name="userPhone"></Field><br></br><br></br>
                  <ErrorMessage name="userPhone"></ErrorMessage>
                  <Field type='password' placeholder='Password' name="userPassword"></Field><br></br><br></br>
                  <ErrorMessage name="userPassword"></ErrorMessage>
                  <Field type='text' placeholder='City' name="userCity"></Field><br></br><br></br>
                  <ErrorMessage name="userCity"></ErrorMessage>
                  <Field type='text' placeholder='State' name="userState"></Field><br></br><br></br>
                  <ErrorMessage name="userState"></ErrorMessage>
                  <input type="file" placeholder='Choose Image' onChange={picSelect}></input><br></br>

                  <button type="submit" class="btn btn-outline-success">Signup</button><br></br>
                  
                  <p style={{textAlign:"center"}}>I have already an account <span><Link to='/'>Login</Link></span></p>
       </Form>
       
    </div>

    </div>
    </Formik>
    </>
  )
}

export default Signup
