# Month 2 - Week 4 - Day 4: Lists

## What I Learned

- Lists in React are rendered using the JavaScript map() method
- Every list item must have a unique key prop — React uses it
  to track which items changed, were added or removed
- Using index as key is okay for static lists but for dynamic
  lists always use a unique id like item.id or Date.now()
- map() loops through an array and returns JSX for each item
- filter() is used to show a subset of a list based on a condition
- Chaining .filter().filter() applies multiple filters at once
- sort() with a comparator function sorts arrays by any field
- Always spread [...array] before sorting to avoid mutating original state
- Date.now() generates a unique id based on current timestamp
- toLocaleString() formats numbers with commas e.g. 85000 → 85,000
- Combining map, filter and sort creates powerful list UIs

## What I Built

6 components covering all aspects of list rendering:

1. Basic List — rendering a simple array of strings and numbers
   with even/odd detection using ternary inside map
2. Student List — rendering an array of objects showing
   name, grade and marks with pass/fail conditional rendering
3. Dynamic List — add and remove items from a list using
   state, spread operator and filter method
4. Filtered List — product list with category filter buttons
   and a live search input chaining two filters together
5. Sorted List — employee list with sort by name or salary
   and toggle between ascending and descending order
6. Todo List — full featured todo app combining useState,
   events, conditional rendering and lists all in one component
   with add, toggle complete, delete and filter functionality

## Challenges Faced

- Forgetting the key prop at first — React showed a warning
  in the console which helped me catch it
- Mutating state directly with sort() caused bugs — learned
  to always spread the array first: [...employees].sort()
- Updating one field in an object inside an array required
  map with spread: { ...todo, completed: !todo.completed }
- Chaining filter methods was new but makes the code clean
