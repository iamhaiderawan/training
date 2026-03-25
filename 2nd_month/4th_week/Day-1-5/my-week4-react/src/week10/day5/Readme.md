# Month 2 - Week 4 - Day 5: Mini Project — Student Management System

## What I Learned

- How to plan and break a real project into components before coding
- Lifting state up — App holds all data and passes it down via props
- Passing functions as props so child components can update parent state
- Combining search, filter and sort on the same array using chained operations
- Using Date.now() to generate unique IDs for new entries
- Controlled forms with multiple fields using one handleChange function
- Expanding and collapsing items using an array of expanded IDs in state
- Object.entries() to find strongest and weakest subject dynamically
- Math.max() and Math.min() with spread to find highest and lowest scores
- Returning null from a component renders nothing — used in ClassSummary
  when no students exist yet

## What I Built

A full Student Management System with 6 components:

1. Header — displays live stats: total, passing and failing count
2. AddStudentForm — controlled form with validation for adding
   new students with name, grade and marks for 4 subjects
3. SearchFilterBar — search by name, filter by pass/fail result
   and sort by name, average or grade
4. StudentCard — displays each student with average, letter grade
   and pass/fail status. Expandable to show subject breakdown,
   strongest and weakest subject
5. StudentList — maps over processed students and renders cards,
   shows empty state message when no results found
6. ClassSummary — calculates and displays class average, highest
   and lowest scorer, pass rate from all students

## Week 10 Summary

- Day 1: useState — managing and updating component data
- Day 2: Events — handling clicks, inputs, forms, keyboard and mouse
- Day 3: Conditional Rendering — if/else, ternary, &&, role based UI
- Day 4: Lists — map, filter, sort, dynamic add/remove
- Day 5: Mini Project — combining all four concepts in one real app

## Challenges Faced

- Planning the component tree before coding took time but saved
  a lot of confusion later
- Lifting state up was tricky at first — understanding that App owns
  the data and children just receive and display it
- Passing handler functions as props and calling them in child
  components felt confusing but clicked after practice
- Chaining search then filter then sort in the right order took
  a couple of attempts to get right
