# Week 9 - Day 5: Practice — Student Report Card App

## What I Learned

- How to plan a component tree before writing any code
- Passing objects as props e.g. subjects={{ math: 88 }}
- Combining all week concepts into one real project
- Keeping components small and focused makes the code readable
- Static components and prop-driven components can coexist in one app

## What I Built

A Student Report Card app with the following structure:
App
├── PageHeader
├── ReportCard (used 3 times)
│ ├── StudentInfo (receives name, grade)
│ └── SubjectList (receives subjects object)
└── PageFooter

Covered every concept from this week in one project:
components, JSX, props, prop drilling, fragments, static components.

## Challenges Faced

- Passing an object as a prop was new — subjects={{ math: 88 }}
- Had to think carefully about which component owns which data

## Week 9 Summary

- Day 1: Understood what React is and why it exists
- Day 2: Wrote first components using JSX
- Day 3: Learned props and made reusable components
- Day 4: Combined components into a real-looking app
- Day 5: Built a complete project using all concepts
