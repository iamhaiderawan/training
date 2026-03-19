function ProfileCard({ name, role, city, experience }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Role: {role}</p>
      <p>City: {city}</p>
      <p>Experience: {experience} years</p>
    </div>
  );
}

function App() {
  return (
    <>
      <h1>Our Dev Team</h1>
      <ProfileCard
        name="Ali Haider"
        role="Frontend Dev"
        city="Islamabad"
        experience={1}
      />
      <ProfileCard
        name="Ahmed Khan"
        role="Backend Dev"
        city="Lahore"
        experience={3}
      />
      <ProfileCard
        name="Sara Ali"
        role="UI Designer"
        city="Karachi"
        experience={2}
      />
    </>
  );
}

export default App;
