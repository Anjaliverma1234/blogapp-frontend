import React, { useEffect } from 'react'
import './Login.css'
import { Formik, Form,Field,ErrorMessage} from 'formik'
import * as yup from "yup"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch ,useSelector} from 'react-redux'
import {ToastContainer,toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { SignInUser,clearState } from '../../features/auth/authSlice'
const Login = () => {

   const dispatch=useDispatch();
   let navigate=useNavigate();


  const data=useSelector((state)=>state.user)
  const{error,message,loading}=data


  useEffect(()=>{
    if(error){
      toast.error(error,{position:toast.POSITION.TOP_CENTER});
       setTimeout(()=>{
        dispatch(clearState());
        navigate('/')
      },1000);
    }
    if(message){
      toast.success(message,{position:toast.POSITION.TOP_CENTER});
       setTimeout(()=>{
        dispatch(clearState());
        navigate('/bloglist')
      },1000);
    }
  })



   const  defaultvalue={
    userEmail:'',
    userPassword:''

   }

   const validationSchema= yup.object().shape({
          userEmail:yup.string().required().email("please enter your name"),
          userPassword:yup.string().required("please enter your name").min(8,"password must be a 8 char"),
        })
            
        const handleSubmit =  (values) => {
            console.log("value",values);
            let obj={  
          
                ...values,      
               }

          
          dispatch(SignInUser(obj))
        };
  return (
    <>
    <ToastContainer/>
       <Formik
             initialValues={defaultvalue}
             validationSchema={validationSchema}
             onSubmit={handleSubmit}
               >
    <div className='Login'>
    <div className='login'>
         <h1>Login</h1>
         <Form>
                  <Field type='Text' placeholder='Email ID' name="userEmail"></Field><br></br><br></br>
                  <ErrorMessage name="userEmail"></ErrorMessage>
                  <Field type='password' placeholder='Password' name="userPassword"></Field><br></br><br></br>
                  <ErrorMessage name="userPassword"></ErrorMessage><br></br>
                  <h5><Link to='/forget'>Forgot password?</Link></h5>
                    {/* <button type='submit'>Login</button> */}
                    <button type="submit" class="btn btn-outline-success">Login</button>

                  <p>I dont have an account</p>
                  <h4><Link to='/signup'>Register</Link></h4>
         </Form>
    </div>
    </div>
    </Formik>
    </>
  )
}

export default Login
