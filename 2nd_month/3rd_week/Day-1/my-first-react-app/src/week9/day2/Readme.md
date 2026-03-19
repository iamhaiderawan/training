# Week 9 - Day 2: Components & JSX

## What I Learned

- A component is a JavaScript function that returns JSX
- Component names must always start with a capital letter
- The return must have one parent element — use Fragment <></> if needed
- JSX looks like HTML but has differences:
  - Use className instead of class
  - All tags must be self-closing e.g. <img /> <input />
  - Use {} curly braces to embed JavaScript inside JSX
- You can use variables, expressions and calculations inside {}

## What I Built

A ProfileCard component that displays name, role and city using
JSX and JavaScript variables inside curly braces. Wrapped everything
in a Fragment to avoid adding unnecessary HTML tags.

## Challenges Faced

- Kept forgetting to use className instead of class
- Was confused about when to use Fragment vs a div wrapper

## Tomorrow

Props — how to pass data into components from outside
