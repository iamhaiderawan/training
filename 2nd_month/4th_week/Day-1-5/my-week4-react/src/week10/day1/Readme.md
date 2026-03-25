- What is State?
  So far your components just display data — they never change. State is what makes components remember and update data.
  Think of it like this:
  Props — data passed FROM outside (you can't change it)
  State — data that lives INSIDE (you can change it)
  A real example — a counter:

The count value needs to be remembered by the component
When you click a button, the count updates
The screen re-renders to show the new value

That's exactly what state does.

- useState Hook
  React gives us a built-in function called useState to add state to a component.
  jsximport { useState } from 'react';

function Counter() {
const [count, setCount] = useState(0);
// ^^^^^ ^^^^^^^^ ^^^^^^^^^
// value updater initial value
}
Breaking it down:

count — the current value of state
setCount — the function you call to update it
useState(0) — 0 is the starting value

- How to Update State
  You never change state directly. Always use the updater function:
  jsx// ❌ Never do this
  count = count + 1;

// ✅ Always do this
setCount(count + 1);
When you call setCount, React:

Updates the value
Re-renders the component
Screen shows the new value

# Month 2 - Week 4 - Day 1: useState

## What I Learned

- State is data that lives inside a component and can change over time
- Props come from outside and are read-only — state lives inside and can update
- useState is a React Hook — must be imported from react
- Syntax: const [value, setValue] = useState(initialValue)
- value holds the current state
- setValue is the function used to update the state
- Never update state directly — always use the setter function
- Every time state updates, React automatically re-renders the component
- One component can have multiple useState variables
- State can hold any data type: number, string, boolean, array, object
- Boolean state is toggled using !currentValue e.g. setIsDark(!isDark)
- You can use state value in calculations and display results reactively
- Inline styles in React use objects with camelCase properties

## What I Built

6 interactive components to practice useState from different angles:

1. Counter — increase, decrease and reset a number
2. Like Button — track likes with conditional message display
3. User Profile — multiple state variables in one component
   tracking name, age, student status and score
4. Day/Night Toggle — boolean state controlling background
   and text color using inline styles
5. Scoreboard — two independent state variables for two teams
   with winner calculation logic
6. Reading Tracker — state used in math calculations to show
   reading progress percentage with dynamic status messages

## Challenges Faced

- Remembering to import useState at the top of the file
- Understanding that each component has its own independent state
- Using state value inside calculations took some practice
- Toggling boolean state with !value was new but makes sense
