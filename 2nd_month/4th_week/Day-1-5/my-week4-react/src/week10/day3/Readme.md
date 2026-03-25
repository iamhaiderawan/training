# Month 2 - Week 4 - Day 3: Conditional Rendering

## What I Learned

- Conditional rendering means showing different UI based on state or data
- Three main ways to conditionally render in React:
  1. if/else — best for large blocks of different UI
  2. Ternary operator condition ? A : B — best for inline two-option rendering
  3. Short circuit && — best for showing something or nothing at all
- A component can return completely different JSX based on a condition
- Helper functions like renderStep() keep JSX clean when
  there are many conditions to handle
- disabled prop on buttons prevents clicks when a condition is met
- setTimeout simulates real-world async data loading
- Combining multiple conditions with && creates layered UI logic
- Role based rendering is a very common real world pattern

## What I Built

6 components covering all conditional rendering techniques:

1. Basic If/Else — login and logout switching between two
   completely different return blocks
2. Ternary Rendering — membership status and age eligibility
   using inline ternary operators
3. Short Circuit && Rendering — notifications badge, admin panel
   features and premium features shown only when conditions are true
4. Multi Step Form — 4 step registration flow using a helper
   function to render the correct step content
5. Loading State — three states: idle, loading and loaded/error
   simulating a real API fetch with setTimeout
6. Role Based Rendering — four user roles each showing
   different content and permissions

## Challenges Faced

- Knowing when to use if/else vs ternary vs && took practice
  Rule I learned: && for show/hide, ternary for A or B, if/else for complex logic
- The disabled prop on buttons was new to me
- setTimeout inside a function to simulate loading was interesting
  — it shows how real apps handle async operations
