import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
  blogCreate_msg: "",
  blogList_msg: "",
  blogDetail_msg: "",
  blog_Data: "",
  blog_Details: "",
  loading: false,
  error: "",
  count: "",
  comments : '',
};

//Async Function to create Blogs
export const createBlog = createAsyncThunk(
  "blog/create",
  async (body, thunkAPI) => {
    const response = await axios.post(
      "http://localhost:7000/blog/create",
      body,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response;
  }
);
//get blog
export const getBlog = createAsyncThunk("blog/get", async (thunkAPI) => {
  const resResult = await fetch("http://localhost:7000/blog/blogs", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  });

  let data = await resResult.json();
  if (data.success) {
    return data;
  } else {
    return thunkAPI.rejectWithValues(data);
  }
});
//getblogdetails
export const getblogDetails=createAsyncThunk(
    "blog/getblogDetails",
    async(id,thunkAPI)=>{
          const resResult=await fetch(`http://localhost:7000/blog/details/${id}`,{
            method:"get",
            headers:{
                Accepat:"application/json",
                "Context-type":"application/json"
            }
        }
       

        );
        let data=await resResult.json();
        if(data.success){
          console.log(data)
            return data;

        }else{
            return thunkAPI.rejectWithValue(data)
        }
    }
)

const BlogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    clearState: (state) => {
      state.blogCreate_msg = "";
      state.error = "";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(createBlog.pending, (state, { payload }) => {
        console.log("Pending.....");
        state.loading = true;
        state.error = "";
        state.blogCreate_msg = "";
      })
      .addCase(createBlog.fulfilled, (state, { payload }) => {
        state.loading = false;
        console.log("Successful.....", payload);
        state.blogCreate_msg = payload.data.message;
      })
      .addCase(createBlog.rejected, (state, { payload }) => {
        console.log("This is Error.....", payload);
        console.log("Request Rejected");
        state.loading = false;
        state.error = payload.error;
      });

    //get blog
    builder
      .addCase(getBlog.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(getBlog.fulfilled, (state, { payload }) => {
        state.loading = false;
        if (payload.error) {
          state.error = payload.error;
        } else {
          state.blogList_msg = payload.message;
          state.blog_Data = payload.blog;
        }
      })
      .addCase(getBlog.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.error;
      })

     //getBlogDetails
    .addCase(getblogDetails.pending,(state)=>{
            state.loading = true;
        })
        .addCase(getblogDetails.fulfilled,(state,{payload})=>{
            state.loading = false;
            if(payload.error){
                state.error = payload.error;
            }else{
                state.blogDetail_msg = payload.message;
                state.blog_Details = payload.blog;
                state.comments = payload.comment;
            }
        })
        .addCase(getblogDetails.rejected,(state,{payload})=>{
            state.loading = false;
            //state.error = payload.error;
        })


    
  },
});

export default BlogSlice.reducer;
export const { clearState } = BlogSlice.actions;