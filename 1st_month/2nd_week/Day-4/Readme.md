- What is Flexbox?

Flexbox is a CSS layout system that helps you:

- Align items easily

- Arrange items in rows or columns

- Create responsive layouts without floats or complex positioning

It works using:

- A flex container (parent)

- Flex items (children)

🔹 Step 1: Make a Flex Container

You activate Flexbox by writing:

display: flex;

Example:

.container {
display: flex;
}

🔹 Important Flexbox Properties (Basics)
For the container:
Property ---- What it does
display: flex, ---- Turns on flexbox
flex-direction, ---- Row or column layout
justify-content, ---- Align items horizontally
align-items, ---- Align items vertically
gap, ---- Space between items
