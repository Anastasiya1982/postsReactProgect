import { render,screen,  waitFor} from "@testing-library/react";
import "@testing-library/jest-dom";

import { BrowserRouter, MemoryRouter } from "react-router-dom";

import Post  from "./Post";

test("completed post component should be rendered", async () => {
	const post = {
		id: 2,
		title: "grocery shopping",
		body: "some post contetn here",
	};
	render(<Post post={post} />, { wrapper: BrowserRouter });
    const newPost=await screen.findByTestId(`post-${post.id}`);
     	
    screen.debug
    expect(newPost).toBeInTheDocument();
    //  expect(newPost).toBeInTheDocument()
  })
	
    
	

