import { render, screen } from "@testing-library/react"
import Greet from "./Greet"
import '@testing-library/jest-dom'

describe('Greet', () => {
    
    test('Greet renders correctly', () => {
        render(<Greet/>);
        const textElement = screen.getByText(/Hello/);
        expect(textElement).toBeInTheDocument();
    })
    
    describe('Nested', () => {
        test('Greet renders with a name ', () => {
            render(<Greet name={"Pratik"}/>);
            const textElement = screen.getByText("Hello Pratik");
            expect(textElement).toBeInTheDocument();
        })
    })
    
})