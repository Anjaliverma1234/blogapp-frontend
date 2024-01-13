
import React, { useEffect } from 'react'
import profile from './../../assets/anjali.jpg'
import comm from './../../assets/comm.png'
import './BlogDetails.css'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getBlog,getblogDetails } from '../../features/blog/blogSlice'
import Navbar from  '../../navbar/Navbar'


const BlogDetails=() => {

  const param = useParams();
  const dispatch = useDispatch();
  const blogDetail = useSelector((state)=>state.blog);
  console.log(blogDetail)
  const {blog_Details , comments} = blogDetail;
  const {id} = param;
  console.log('comment',comments);
  //console.log(blog_Details.blogPic);
  const{title,blogPic,description}=blog_Details;
  useEffect(()=>{
     dispatch(getblogDetails(id));
  },[])
  
  return (
    <>
    <div>
    <Navbar/>
    <div className='blogDetail'>
          <div className="blogCard">
            <img src={`http://localhost:7000${blogPic}`} alt="" id='blogPicture' />
            <h1>{title}</h1>
            <h5>{description}</h5>
            <Link to= {`/comment/${id}`} style={{textDecoration:'none',}}><button id='addComment'>Add Comment</button></Link>
          </div>
          <h2 style={{margin:'auto', color:'red'}}>Added Comments😊</h2>
          <div className="comment">
            {
              comments && comments.map((comment)=>{
                const {profilePic} = comment.userId;
                const imageUrl = profilePic.split('\\uploads\\')[1];
                return(
                  <div className="commentCard">
                  <img src={`http://localhost:7000/uploads/${imageUrl}`} 
                  alt='userImage' id='commentUser'></img>
                  <h4>{comment.comment}</h4>
                  <hr />
                  <p>{comment.userId.userName}</p>
                  <p>{comment.createdAt.slice(0,10)}</p>
                  </div>
                )
              })
            }
          </div>
    </div>
    
    </div>
    
    </>
  
  )
}

export default BlogDetails

