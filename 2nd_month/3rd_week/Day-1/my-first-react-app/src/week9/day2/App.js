function ProfileCard() {
  const name = "Ali Haider";
  const role = "Frontend Developer";
  const city = "Islamabad";

  return (
    <div>
      <h2>{name}</h2>
      <p>Role: {role}</p>
      <p>City: {city}</p>
      <p>Skills learned so far: {2 + 3}</p>
    </div>
  );
}

function App() {
  return (
    <>
      <h1>Week 9 - Day 2</h1>
      <ProfileCard />
    </>
  );
}

export default App;
