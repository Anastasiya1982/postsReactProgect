import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import MyButton from './button';

 
describe('button check event',()=>{
    test ("it should be render in dociment",(()=>{
        render(<MyButton data-testid="add-post-btn" />);
        const btn =screen.getByTestId("add-post-btn")

    }))
})