# Month 3 - Week 1 - Day 4: Project Structure

## What I Learned

- Real React projects split components into separate files
- Each component file has one component and uses export default
- Utility functions like validation are kept in a utils/ folder
- Pages are top level views kept in a pages/ folder
- Components are reusable UI pieces kept in a components/ folder
- Two types of exports in JavaScript:
  - Default export: export default ComponentName — one per file
  - Named export: export function name() {} — multiple per file
- Importing default: import Header from './components/Header'
- Importing named: import { validate } from '../utils/validate'
- The ../ in import paths means go one folder up
- State that is needed by multiple components is lifted to App.js
  and passed down as props — this is called lifting state up
- Functions can also be passed as props so child components
  can trigger state changes in the parent
- Separating concerns makes each file focused on one job:
  Header.js only handles the header, validate.js only handles
  validation logic, StudentsPage.js only handles the student list

## What I Built

A fully structured Student Management System split across 7 files:

src/utils/validate.js

- validateStudentForm() — validates all form fields
- getLetterGrade() — converts marks to letter grade
- isPassing() — checks if marks are above 50

src/components/Header.js

- Displays title, total students count and search input
- Calls onSearch prop when search input changes

src/components/Footer.js

- Displays copyright with dynamic current year

src/components/StudentCard.js

- Displays one student with expand/collapse details
- Calls onEdit and onRemove props from parent
- Imports getLetterGrade and isPassing from utils

src/components/StudentForm.js

- Handles both adding new students and editing existing ones
- Imports validateStudentForm from utils
- Shows cancel button only when in edit mode

src/pages/StudentsPage.js

- Manages all student state: list, editing, filter, sort
- Imports and uses StudentCard and StudentForm components
- Handles add, remove, update, filter and sort logic

src/App.js

- Root component importing Header, Footer, StudentsPage
- Manages search term state and passes it to StudentsPage

## Challenges Faced

- The ../ path syntax was confusing at first — drawing the
  folder structure on paper helped understand it
- Knowing what state to keep in App vs StudentsPage vs individual
  components took some thought — the rule is: state lives in the
  lowest common ancestor of all components that need it
- Named vs default exports — remembering which one uses curly
  braces on import and which one does not
