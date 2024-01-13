import React, { useEffect } from 'react'
import './Comment.css'
import * as yup from "yup"
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createComment,clearState } from '../../features/comment/commentSlice'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { Formik,Field,Form, ErrorMessage } from 'formik'
import Navbar from  '../../navbar/Navbar'
import Footer from '../../navbar/Footer'

const Comment=()=> {
  const params = useParams();
  const dispatch = useDispatch();
  const { id } = params;

  // const comment = useSelector((state) => state.comment);
  // const { cmtCreate_msg, error } = comment;

  

  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user._id);

  // useEffect(() => {
  //   if (cmtCreate_msg) {
  //     toast.success(cmtCreate_msg, { position: toast.POSITION.TOP_CENTER });
  //     dispatch(clearState());
  //   }
  //   if (error) {
  //     toast.error(error, { position: toast.POSITION.TOP_CENTER });
  //   }
  // }, [cmtCreate_msg, error]);

  const initialState = {
    comment: "",
  };

  const validationSchema = yup.object().shape({
    comment: yup.string().required("Enter the Comment"),
  });

  const handleSubmit = (values) => {
    const obj = {
      ...values,
      blogId: id,
      userId: user._id,
    };
    console.log(obj);
    dispatch(createComment(obj));
  };

  return (
    <>
    <Navbar/>
      <ToastContainer />
      <div className="commentCon">
        <div className="commentBox">
          <h1>Add Comment</h1>
          <Formik
            initialValues={initialState}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <label htmlFor="">Comment</label>
              <Field
                type="text"
                name="comment"
                placeholder="Enter you Comment"
              />
              <ErrorMessage name="comment"></ErrorMessage>
              <button id="commentButton" type="submit">
                Add
              </button>
            </Form>
          </Formik>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Comment;



