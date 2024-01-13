import React, { useEffect, useState } from 'react'
import './AddBlog.css'
import { Formik, Form,Field,ErrorMessage} from 'formik'
import * as yup from "yup"
import { useDispatch, useSelector } from 'react-redux'
import { clearState, createBlog} from '../../features/blog/blogSlice'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";



const AddBlog = () => {

  const[pic,setPic]=useState("")

  const dispatch=useDispatch();

  const navigate=useNavigate();

  const blogData=useSelector((state)=>state.blog);
  let{blogCreate_msg,error}=blogData;

  useEffect(()=>{
     if(blogCreate_msg){
        toast.success(blogCreate_msg,{position:toast.POSITION.TOP_CENTER});
        setTimeout(()=>{
          dispatch(clearState());
            navigate("/bloglist")
        },1000);
    }
    if(error){
        toast.error(error,{position:toast.POSITION.TOP_CENTER});
        
    }
   
  },[blogCreate_msg,error]);


  const defaultValue={
    title:"",
    description:"",
    founded:"",
    
  }
  
  const validationSchema=yup.object().shape({
    title:yup.string().required("Please enter your title"),
    description:yup.string().required("Please enter your description"),
    founded:yup.string().required("please enter founded")
    
  })

  const handleSubmit=(values)=>{
          const user=JSON.parse(localStorage.getItem("user"));
         let obj={
          ...values,
          blogPic:pic,
          
         }
         dispatch(createBlog(obj));
      //console.log(obj);
  }

  function addBlogPic(e){
  setPic(e.target.files[0]);
  }
  return (

    <>
    <ToastContainer/>
    <Formik
         initialValues={defaultValue}
         validationSchema={validationSchema}
         onSubmit={handleSubmit}
    >
    
      <Form className='addblog'>
        <div className='addblog1'>
        <h1>Add Blog</h1>
          <Field type='text' placeholder='Title' name='title'/><br></br>
          <ErrorMessage name='title'></ErrorMessage><br></br>
          <Field type='text' placeholder='Description' id='dis' name='description'/><br></br>
          <ErrorMessage name='description'></ErrorMessage><br></br>
          <input type='file' placeholder='Choose Image' onChange={addBlogPic}/><br></br>
          <Field type='date' name='founded' />
            <br/>
            <span className='danger'><ErrorMessage name='founded'></ErrorMessage>{" "}</span><br/>
          <button type='submit'>Save</button>
        </div>
      </Form>
      </Formik>
    </>
  )
}

export default AddBlog
