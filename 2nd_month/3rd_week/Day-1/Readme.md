What is React?

🔹 The Problem React Solves
Before React, building interactive UIs with plain JavaScript meant manually updating the DOM every time something changed.
js// Vanilla JS — you handle everything yourself
const li = document.createElement('li');
li.textContent = newTask;
taskList.appendChild(li);
updateCounter();
checkIfEmpty();
saveToStorage();
As apps grew bigger, this became a nightmare to manage.

🔹 What is React?
React is a JavaScript library for building user interfaces, created by Facebook (Meta) and open-sourced in 2013.
It focuses on one thing: rendering UI and keeping it in sync with your data.

It's not a full framework — it's a library. It handles the View layer only.

Core Ideas Behind React

1. Component-Based
   Your UI is broken into small, reusable pieces called components — like LEGO blocks for your page. A navbar is a component. A button is a component. A whole page is components inside components.
2. Declarative
   You describe what the UI should look like. React figures out how to update the DOM.
3. Virtual DOM
   React keeps a lightweight copy of the DOM in memory. When data changes, it compares the old and new versions and only updates what actually changed — making it fast.

🔹 Your First Glimpse of React Code
jsx// A component is just a JavaScript function
function Greeting() {
return (

<div>
<h1>Hello, World!</h1>
<p>Welcome to React 🚀</p>
</div>
);
}

// You use it like an HTML tag:
<Greeting />
That HTML-looking syntax inside JavaScript is called JSX

🔹 React's Brief History
Year ---- Event
2011 ---- Created internally at Facebook to fix newsfeed scaling issues
2013 ---- Open-sourced at JSConf US
2015 ---- React Native released — write React, deploy on iOS & Android
2016+ ---- Became the most popular frontend library in the world
