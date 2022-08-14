import axios from "axios";

const instance=axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/'
})

export const postsApi={
    getPosts(limit=5, page=1){
        return instance.get('posts',{params:{
              _limit:limit,
              _page:page
            }})
    },
    getPostById(id){
        return instance.get(`posts/${id}`)
    },
    addPost(post){
        return instance.post("/posts",{post})
    },
    removePost(id){
        return instance.delete(`posts/${id}`)
    },
     updatePost(id, post){
        return instance.put(`posts/${id}`,{post})
    },
    getComments(postId){
       return instance.get(`posts/${postId}/comments`);
    },
    getAlbums(){
        return instance.get('albums')
    }

    
}

