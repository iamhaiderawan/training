What is CSS?

CSS (Cascading Style Sheets) is used to style HTML pages.

HTML = structure
CSS = design (colors, fonts, layout, spacing, etc.)

Example:

<p>This is a paragraph.</p>

Without CSS → plain text
With CSS → you can change its color, size, alignment, etc.

Why do we use CSS?

CSS helps to:

- Make websites beautiful

- Keep design separate from content

- Change styles of many pages at once.

Types of CSS
There are 3 types, but today you need to learn:

1- Inline CSS

CSS written inside an HTML tag using the style attribute.

Example:

<p style="color: red; font-size: 20px;">This is red text</p>

✅ Easy to use
❌ Not good for large websites
❌ Hard to manage

2- External CSS

CSS written in a separate .css file and linked to HTML.

Example:

HTML file (index.html)

<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <p>This is styled using external CSS.</p>
</body>
</html>

CSS file (style.css)

p {
color: blue;
font-size: 18px;
}

✅ Best practice
✅ Clean and organized
✅ One CSS file can style many pages
