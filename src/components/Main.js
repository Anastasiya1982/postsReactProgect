import React, { useEffect, useState, useMemo } from "react";
import PostForm from "./PostForm";
import PostList from "./PostList";
import Modal from "./Modal/modal";
import Select from "./Select/select";
import MyButton from "./MyButton/button";
import { useSearchParams } from "react-router-dom";
import "../App.css";
import MyInput from "./MyInput/myInput";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Transition } from "react-transition-group";
import {
  fetchPosts,
  addNewPostThunk,
  removePostThunk,
  updatePostThunk,
} from "../store/postsReducer";
import { CircularProgress, PaginationItem} from "@mui/material";
import Paginator from "./MyPaginator/paginator";
import Pagination from "@mui/material/Pagination";
import { makeStyles, StylesContext } from "@mui/styles";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const LIMIT = 7;

const Main = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [limit, setLimit] = useState(LIMIT);
  const [page, setPage] = useState(1);
  // const [totalCount,setTotalCount]=useState(0)

  const posts = useSelector((state) => state.posts.posts);
  const totalCount = useSelector((state) => state.posts.totalPostCount);
  const isPostLoading = useSelector((state) => state.posts.isPostsLoading);

  const serchQueryfromBrowser = searchParams.get("post") || "";
  const sortedParams = searchParams.has("sortBy");

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("USE EFFECT ");
    dispatch(fetchPosts({ limit, page }));
  }, []);

  // useEffect(()=>{
  //   if(posts){
  //     setTotalCount(posts.length)
  //   }
  // },[posts])

  const addPost = (newPost) => {
    dispatch(addNewPostThunk(newPost));
  };

  const sortedPost = useMemo(() => {
    if (selectedValue) {
      const sortedPost = [...posts].sort((a, b) =>
        a[selectedValue].localeCompare(b[selectedValue])
      );
      return sortedPost;
    }
    return posts;
  }, [selectedValue, posts]);

  const searchingPosts = useMemo(() => {
    const newPost = sortedPost.filter((post) =>
      post.title.toLowerCase().includes(serchQueryfromBrowser)
    );
    return newPost;
  }, [serchQueryfromBrowser, sortedPost]);

  const setSort = (sortValue) => {
    setSelectedValue(sortValue);
    // setSearchParams({ sortBy: sortValue });
  };

  const updateCurrentPostTitle = (post) => {
    console.log("post", post);
    let newTitle = prompt();
    const newPost = {
      ...post,
      title: newTitle,
    };
    dispatch(updatePostThunk(post.id, newPost));
  };

  const remove = (post) => {
    dispatch(removePostThunk(post.id));
  };

  const changePage = (newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    dispatch(fetchPosts({ limit, page }));
  }, [page, limit]);

  const totalPageCount = Math.ceil(totalCount / limit);

  return (
    <div className="main">
      {isPostLoading && (
        <div className="progressBar">
          <CircularProgress />
        </div>
      )}

      <MyButton data-testid='add-post-btn' onClick={() => setIsModalVisible(true)}>AddPost</MyButton>
      <Modal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      >
        <PostForm addPost={addPost} setIsModalVisible={setIsModalVisible} />
      </Modal>
      <div>
        <Select
          options={[
            { value: "title", name: "По названию" },
            { value: "body", name: "По содержимому" },
          ]}
          value={selectedValue}
          onChange={setSort}
        />
        <MyInput placeholder="search..."
          value={serchQueryfromBrowser}
          onChange={(e) => setSearchParams({ post: e.target.value })}
        />
      </div>
      {searchingPosts.length ? (
        <PostList
          posts={searchingPosts}
          remove={remove}
          updateCurrentPostTitle={updateCurrentPostTitle}
        />
      ) : (
        <div className="noPostsFound">
          <h2>Посты не найдены</h2>
        </div>
      )}
      <Paginator
        totalPages={totalCount}
        limit={limit}
        page={page}
        onChange={changePage}
      />
      {/* <Pagination
        count={totalPageCount}
        page={page}
        onChange={(e, page) => setPage(page)}
        showFirstButton
        showLastButton
        // shape="rounded"
        renderItem={(item) => (
          <PaginationItem   
           components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }} 
           
          {...item}/>       )
       
      } */}
      {/* /> */}
    </div>
  );
};

export default Main;
