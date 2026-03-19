# Week 9 - Day 3: Props

## What I Learned

- Props (properties) are how you pass data into a component from outside
- You pass props like HTML attributes: <Card name="Ali" />
- Inside the component you receive them as a props object
- Destructuring props is cleaner: { name, role } instead of props.name
- Props are read-only — you must never modify them inside a component
- Default prop values can be set in case a prop is not passed
- Same component + different props = reusable UI

## What I Built

A ProfileCard component that accepts name, role, city and experience
as props. Used it three times in App with different data to display
a dev team list — showing how one component can produce different output.

## Challenges Faced

- Initially forgot to destructure props and was writing props.name everywhere
- Confused about why props are read-only — understood after reading about
  one-way data flow in React

## Tomorrow

Simple Components — combining everything into a slightly real-looking app
