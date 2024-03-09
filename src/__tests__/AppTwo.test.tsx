// src/__ tests __/App.test.tsx
// import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import App from "../App"

test('demo', () => {
    expect(true).toBe(true)
})

test("Renders the main page", () => {
    render(<App />)
    expect(true).toBeTruthy()
})

test('text check', () => {
    render(<App />)
    const textElement = screen.getByText("Vite + React");
    expect(textElement).toBeInTheDocument();
})
