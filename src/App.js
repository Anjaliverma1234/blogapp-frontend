import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Blog/component/auth/Login';
import Signup from './Blog/component/auth/Signup';
import Navbar from './Blog/navbar/Navbar';
import Footer from './Blog/navbar/Footer';
import AddBlog from './Blog/component/blog/AddBlog';
import BlogList from './Blog/component/blog/BlogList';
import ForgetPassword from './Blog/component/auth/ForgetPassword';
import ResetPassword from './Blog/component/auth/ResetPassword';
import BlogDetails from './Blog/component/blog/BlogDetails';
import Comment from './Blog/component/blog/Comment';
import Protected_route from './Blog/component/protected/Protected_route';



function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      {/* <Route path='/bloglist/' element={<Protected_route Component={BlogList}/>}></Route>
      <Route path='/Navbar/' element={<Protected_route Component={Navbar}/>}></Route> */}
      <Route path='/Navbar' element={<Navbar/>}></Route>
      <Route path='/Footer' element={<Footer/>}></Route>
      <Route path='/addblog' element={<AddBlog/>}></Route>
      <Route path='/bloglist' element={<BlogList/>}></Route>
      {/* <Route path='/addblog/' element={<Protected_route Component={AddBlog}/>}></Route> */}
       <Route path='/reset'  element={<ResetPassword/>}></Route>
      <Route path='/BlogDetails/:id' element={<BlogDetails/>}></Route>
      <Route path='/comment/:id' element={<Comment/>}></Route>
    </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
