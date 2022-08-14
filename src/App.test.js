import {render,screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, MemoryRouter } from "react-router-dom";

import App from './App';
import Home from "./pages/Home";


describe('renders learn react link',()=>{
  test("renders app ", () => {   
		render(<App />, { wrapper: BrowserRouter });
        // screen.debug()
		const element = screen.queryByText(/hello2/i);
        expect(element).toBeNull()
		// expect(screen.getByText(/home page/i)).toBeInTheDocument()
  });

 
  

  test("router test", () => {
		render(<App />, { wrapper: BrowserRouter });
        const mainLink=screen.getByTestId(/main-link/i);
        const aboutLink = screen.getByTestId(/about-link/i);
        userEvent.click(mainLink);
        expect(screen.queryByTestId('home-page')).not.toBeNull();
        userEvent.click(aboutLink);
        expect(screen.queryByTestId('about-page')).not.toBeNull();
  });
 
})
