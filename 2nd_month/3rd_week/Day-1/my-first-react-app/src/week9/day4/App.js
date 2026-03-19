function BlogTitle({ title }) {
  return <h2>{title}</h2>;
}

function BlogMeta({ author, date }) {
  return (
    <p>
      By {author} · {date}
    </p>
  );
}

function BlogCard({ title, author, date, summary }) {
  return (
    <div>
      <BlogTitle title={title} />
      <BlogMeta author={author} date={date} />
      <p>{summary}</p>
      <hr />
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>My Blog</h1>
      <p>Thoughts on coding & life</p>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <p>© 2025 Ali Hassan</p>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />

      <BlogCard
        title="My Journey into React"
        author="Ali Haider"
        date="March 2025"
        summary="I started learning React this week and it already makes sense..."
      />

      <BlogCard
        title="Why I Chose Web Development"
        author="Ali Haider"
        date="February 2025"
        summary="Web development gives you the ability to build things people actually use..."
      />

      <BlogCard
        title="HTML vs React — What is the Difference?"
        author="Ali Haider"
        date="January 2025"
        summary="When I first heard about React I thought it was just HTML. I was wrong..."
      />

      <Footer />
    </>
  );
}

export default App;
