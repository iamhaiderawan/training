# Month 2 - Week 4 - Day 2: Events

## What I Learned

- Events in React are handled using camelCase: onClick, onChange, onSubmit
- Event handlers are functions passed as props to JSX elements
- You can define handler functions separately or inline with arrow functions
- The event object is automatically passed to handler functions
- event.target.value reads the current value of an input field
- event.preventDefault() stops the default browser behavior e.g. form refresh
- Controlled inputs — input value is tied to state and updated via onChange
- Spread operator ...formData is used to update one field without losing others
- Multiple event types exist: onClick, onChange, onSubmit, onKeyDown,
  onMouseEnter, onMouseLeave, onMouseMove, onMouseDown, onMouseUp
- Checkbox events use checked and onChange with a boolean toggle
- Dropdown events use value and onChange with event.target.value
- event.clientX and event.clientY give mouse cursor coordinates

## What I Built

6 interactive components covering different event types:

1. Button Events — three buttons each triggering different messages
   and tracking total click count across all buttons
2. Input Change Event — live preview of typed text and submit
   functionality that clears input after submission
3. Mouse Events — a box responding to mouseenter, mouseleave,
   mousemove, mousedown and mouseup with color changes
4. Keyboard Events — tracking last key pressed, total key count
   and full typed text using onKeyDown and onChange
5. Form Submit Event — a complete contact form with name, email
   and message fields, validation, and a success screen after submit
6. Dropdown and Checkbox Events — language selector with a dropdown,
   two checkboxes with boolean state, and conditional messages
   based on combination of checkbox states

## Challenges Faced

- Understanding event.target.value took a moment — it reads the
  input element's current value at the time of the event
- event.preventDefault() on form submit was new — without it the
  page would refresh and lose all state
- Updating one field in a form object without losing others required
  using the spread operator: setFormData({ ...formData, [name]: value })
- The [name] syntax for dynamic object keys was unfamiliar at first
