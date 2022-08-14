import axios from 'axios'

class postsService{
   static  async getAllPosts({limit=5, page=1}){
      try{
        const response= await axios.get("https://jsonplaceholder.typicode.com/posts",{
          params:{
            _limit:limit,
            _page:page
          }
        });
        //  console.log(response.headers)
        return response
      }
      catch (e){
        console.log(e);
      } 
        
   }
   static  async addPost(post){
    try{
      const response= await axios.post("https://jsonplaceholder.typicode.com/posts",post);
      return response.data
    }
    catch (e){
      console.log(e);
    } 
      
 }
 
 static async getPostById(id){
  try{
   const response= await axios.get('https://jsonplaceholder.typicode.com/posts/'+id);    
   return response.data
  }
  catch(e){
      console.log(e)
  }



}

static async getCommentsByPostId(id){
  try{
   const response= await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);    
   return response.data
  }
  catch(e){
      console.log(e)
  }

  

}
}

export default postsService;


