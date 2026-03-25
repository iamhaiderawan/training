# Week 9 - Day 4: Simple Components

## What I Learned

- Before writing code, break the UI into components on paper first
- Small focused components combine into bigger ones
- Props flow downward — parent passes to child, child passes to grandchild
  this is called prop drilling
- Not every component needs props — static components like Header
  and Footer are perfectly fine with no props
- A component should ideally do one thing only

## What I Built

A simple Blog Post List app with the following structure:
App
├── Header
├── BlogCard (used 3 times)
│ ├── BlogTitle
│ └── BlogMeta
└── Footer

BlogCard receives props from App and passes them down to
BlogTitle and BlogMeta — practicing prop drilling hands-on.

## Challenges Faced

- Thinking in components before coding was unfamiliar at first
- Had to be careful passing the right props to the right child component

## Tomorrow

Day 5 Practice — building a full project using everything from this week
