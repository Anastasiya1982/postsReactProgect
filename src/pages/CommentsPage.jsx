 import { useEffect, useState } from 'react';
import {useParams, useNavigate, useLocation}  from 'react-router-dom';
import axios from 'axios';

const CommentsPage=()=>{ 
    const [comments, setComments]=useState([])   
     const {id}=useParams();
    
     const navigate=useNavigate()
     const location=useLocation();    
  
     const fetchAllComments=async()=>{ 
        console.log("id", id) 
        const comments= await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
         console.log(comments);
         setComments(comments.data)  
  }

  const goBack=()=>navigate(-1);     
      useEffect(()=>{
        fetchAllComments()
    },[])

    return(
        <div>Comments  for post with id:   {id} <div>
          <button onClick={goBack}>Go Back</button>
        {comments.map(com=>(
          <div key={com.id}>{com.body}</div>
        ))}       
        
        </div>
         </div>
    )
}
export default CommentsPage