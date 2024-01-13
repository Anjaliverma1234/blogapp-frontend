import React, { useEffect } from "react";
import './BlogList.css'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import {  useNavigate } from "react-router-dom";
import Navbar from "../../navbar/Navbar";
import { createBlog, getBlog } from "../../features/blog/blogSlice";
import Footer from "../../navbar/Footer";
const BlogList = () => {
  const blog=useSelector((state)=>state.blog);
   const {blog_Data}=blog;
  console.log(blog_Data)

  const navigate=useNavigate();
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getBlog());
  },[]);
  return (
    <>
    <Navbar/>
    <div className="blog">
      <div className='blog1'>
       <h2>My Blog</h2>
       {/* <button>
           <Link style={{textDecoration:"none",color:"black"}} to ="/addblog">ADD BLOG</Link> 
          </button> */}
          <button type="button" class="btn btn-outline-info"><Link style={{textDecoration:"none",color:"black"}} to='/addblog'><p>ADD BLOG</p></Link></button>
      </div>
         <div className='blog2'>
            {
              blog_Data && blog_Data.map(({_id,blogPic,title,description,createdAt})=>{
                console.log('blogPic: ',blogPic)
                

                return (
                <>
                <Link style ={{textDecoration:"none",color:"black"}} to={`/BlogDetails/${_id}`}>

                      
                      <div className="Box">
                     <div className="blog2-box">
                          
                            <img src={`http://localhost:7000${blogPic}`}></img> 
                          
                          
                            <h4>Title: {title}</h4>
                            <p>Description: {description}</p>
                             <p>Date: {createdAt.slice(0,10)}</p>
                            </div>
                            </div>
                            </Link>
                            </>
                          
                )
                }
      )
    } 
    </div> 


</div>
<Footer/>
</>

)
}

export default BlogList


// import React, { useEffect } from 'react'
// import './BlogList.css'
// import office from  './../../assets/officework.jpeg'
// import like from './../../assets/like.png'
// import comment from './../../assets/comment.png'
// import Navbar from '../../navbar/Navbar'
// import Footer from '../../navbar/Footer'
// import { Link } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { listBlog } from '../../features/blog/blogSlice'
// const BlogList = () => {

//     const dispatch=useDispatch();

//     const blogData=useSelector((state)=>state.blog);
//     //console.log(blogData);
//     const{blog_Data}=blogData;

//     useEffect(()=>{
//         dispatch(listBlog());
//     },[])
//   return (
//     <>
//       <Navbar/>
//       <div className='blog'>
//       <div className='blog1'>
//         <h1>My Blog</h1>
//         {/* <button><Link to='/addblog'>ADD BLOG</Link></button> */}
//         <button type="button" class="btn btn-outline-info"><Link to='/addblog'><p>ADD BLOG</p></Link></button>

//       </div>
//       <div className='blog2'>
//        {blog_Data &&
//               blog_Data.map(({ _id, title, description , blogPic,createdAt }) => {
//                 //console.log('blogpic:',blogPic);
//                  return(
//                  <Link to={`/BlogDetails/${_id}`} style={{textDecoration:"none",color:"black"}}>
                
//                  <div className='blog2-box'>
//           <img src={`http://localhost:7000/uploads/${blogPic}`}/>           

//            <h3>{title}</h3>
//             <p>{description} </p>
//             <h5>{createdAt.slice(0,10)}</h5>

//         </div>
        
        
        
//         </Link>
          
//                  )
            
//         })
//       }
       
//       </div>
//       </div>
//       <Footer/>
//     </>
//   )
// }

// export default BlogList

