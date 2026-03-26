# Month 3 - Week 1 - Day 2: Form Submission

## What I Learned

- e.preventDefault() is essential on form submit — without it
  the browser refreshes the page and all state is lost
- onSubmit goes on the form tag, not the button
- type="submit" on a button triggers the form onSubmit handler
- type="button" on a button does NOT trigger form submit
- After submission, storing data in a separate submittedData state
  lets you display it on a success screen while keeping formData
  available to reset and reuse
- Multi step forms keep all data in one shared formData object
  and use a step state to control which fields are visible
- Submission history is built by spreading new entries into
  an array state: setSubmissions([newItem, ...submissions])
- Date.now() for unique IDs and new Date().toLocaleTimeString()
  for human readable timestamps
- Fake authentication works by comparing input against a hardcoded
  array of valid users using array find()
- Tracking failed login attempts in state lets you lock the form
  after a set number of failures using the disabled prop
- Conditional rendering after submit replaces the form with a
  success screen — clicking reset brings the form back

## What I Built

6 components covering all aspects of form submission:

1. Basic Form Submission — simplest possible form submit with
   e.preventDefault, success screen and reset functionality
2. Registration Form — full registration with password confirmation
   check, terms agreement checkbox validation and role select
3. Multi Step Form — 3 step checkout flow sharing one formData
   object across all steps with back and next navigation
4. Form with Submission History — task form that keeps a running
   list of all submitted entries with timestamps and remove option
5. Login Form with Fake Authentication — username and password
   checked against a hardcoded user list, tracks failed attempts
   and locks the form after 3 failures
6. Survey Form — rating slider, radio buttons, textareas and
   checkbox combined into one survey with a detailed results screen

## Challenges Faced

- Forgetting e.preventDefault() caused the page to refresh and
  lose all state — this was an important lesson
- Multi step form was tricky — keeping all data in one object
  while only showing some fields per step took planning
- The login attempt counter logic required careful state management
  to avoid off-by-one errors in the remaining attempts message
