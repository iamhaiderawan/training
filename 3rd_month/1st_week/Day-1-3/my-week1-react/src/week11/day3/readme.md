# Month 3 - Week 1 - Day 3: Validation

## What I Learned

- Validation means checking form data before allowing submission
- Errors are stored in a separate errors object state — one key per field
- A validate() function takes formData and returns an errors object
- If the errors object has any keys, show errors and stop submission
- Object.keys(errors).length > 0 checks if there are any errors
- Clearing a specific error as the user types improves user experience
  done by deleting the key: delete updatedErrors[name]
- onBlur fires when a field loses focus — good for validate-on-blur pattern
- touched state tracks which fields the user has interacted with so
  errors only show for fields the user has visited
- Regex patterns make email and phone validation precise:
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/ for email
  /^\d{11}$/ for exactly 11 digit phone number
- Password strength is calculated by checking multiple conditions
  and incrementing a score for each one that passes
- Character limits are enforced by comparing string length against
  min and max values and showing colored counters
- Each form should have its own dedicated validate function —
  this makes validation reusable and easy to maintain
- Object.values(errors).some(err => err !== '') checks if any
  error message exists in the errors object

## What I Built

6 components covering all validation patterns:

1. Basic Inline Validation — errors shown on submit, cleared
   as user types, separate validate() function returning errors object
2. Real Time Validation on Blur — touched state tracks visited fields,
   errors appear on blur and update in real time as user corrects them,
   green success message shown when field is valid
3. Password Strength Validator — score based strength calculation
   checking length, uppercase, numbers and special characters,
   visual checklist of requirements, confirm password match check
4. Full Registration Validation — 8 field form with complete
   validation including age range check, password match,
   role selection and terms agreement, error count shown at top
5. Character Counter Validation — min and max length per field,
   color coded counters: orange for too short, red for too long,
   green for valid, reusable limits object for all fields
6. Reusable Validation Functions — two forms each with their own
   dedicated validate function showing how to keep validation
   logic separate, clean and reusable

## Challenges Faced

- Understanding touched state — why we need it to avoid showing
  errors on fields the user has not interacted with yet
- The regex for email validation looked complex at first but
  breaking it down made it clear
- Deleting a key from an errors object copy was a new pattern:
  const updated = { ...errors }; delete updated[name]
- Password strength score logic required thinking through each
  condition carefully
