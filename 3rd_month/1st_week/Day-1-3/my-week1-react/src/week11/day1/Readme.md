# Month 3 - Week 1 - Day 1: Controlled Inputs

## What I Learned

- A controlled input is an input whose value is driven by React state
- In uncontrolled inputs the browser manages the value — in controlled
  inputs React manages it through useState and onChange
- Every controlled input needs two things:
  value={stateVariable} and onChange={handlerFunction}
- event.target.value reads the current value typed into the input
- For checkboxes use checked={booleanState} instead of value
- For radio buttons use checked={state === thisValue} to know
  which one is currently selected
- Managing multiple fields with one object state is cleaner than
  one useState per field — use the name attribute to identify fields
- The spread operator ...formData preserves existing fields when
  updating just one: setFormData({ ...formData, [name]: value })
- For checkboxes inside a single object form use event.target.type
  to decide whether to read value or checked
- textarea in React works exactly like input — use value and onChange
- Character limit on textarea is enforced by checking length before
  updating state inside the onChange handler
- input type range, color, date and time are all fully controllable
  the same way as text inputs

## What I Built

6 components covering every type of controlled input:

1. Basic Controlled Input — three separate text inputs each with
   their own useState and live preview below each field
2. Textarea and Select — controlled textarea with character counter
   and limit enforcement, two select dropdowns with live summary
3. Checkboxes and Radio Buttons — gender radio group, skills
   checkboxes managed inside one object state, experience level
   radio group — all fully controlled
4. Single Object State Form — six fields all managed inside one
   formData object using the name attribute and dynamic key update
5. Special Input Types — range sliders for volume and brightness
   with conditional labels, color picker with live color preview box,
   date picker and time picker all controlled
6. Live Profile Builder — combines text inputs, textarea, checkbox,
   radio and select into one form that builds a live preview card
   that updates in real time including dark and light theme toggle

## Challenges Faced

- Understanding why value and onChange must always go together
  on a controlled input — without onChange React blocks typing
- Handling checkboxes differently from text inputs using
  event.target.type and event.target.checked took practice
- Character limit enforcement inside onChange by checking length
  before calling setState was a new pattern
- Using one handleChange for both checkboxes and text inputs
  in the LiveProfileBuilder required the type check condition
