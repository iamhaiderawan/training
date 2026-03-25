import { useState } from "react";

// =====================
// Component 1 — Basic If/Else Rendering
// =====================
function BasicConditional() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    setIsLoggedIn(true);
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }

  if (isLoggedIn) {
    return (
      <div>
        <h2>Basic If/Else Rendering</h2>
        <p>✅ Welcome back, Ali Haider!</p>
        <p>You are currently logged in.</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Basic If/Else Rendering</h2>
      <p>❌ You are not logged in.</p>
      <p>Please login to continue.</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

// =====================
// Component 2 — Ternary Operator Rendering
// =====================
function TernaryRendering() {
  const [isMember, setIsMember] = useState(false);
  const [age, setAge] = useState(16);

  return (
    <div>
      <h2>Ternary Operator Rendering</h2>

      <p>
        Membership Status: {isMember ? "✅ Active Member" : "❌ Not a Member"}
      </p>
      <p>
        Access Level:{" "}
        {isMember ? "Full Access to all features" : "Limited Access only"}
      </p>
      <button onClick={() => setIsMember(!isMember)}>
        {isMember ? "Cancel Membership" : "Get Membership"}
      </button>

      <br />
      <br />

      <p>Your Age: {age}</p>
      <p>
        Eligibility:{" "}
        {age >= 18
          ? "✅ You are eligible to vote"
          : `❌ You need ${18 - age} more years to vote`}
      </p>
      <button onClick={() => setAge(age + 1)}>Birthday +1</button>
      <button onClick={() => setAge(age - 1)}>Age -1</button>
    </div>
  );
}

// =====================
// Component 3 — && Short Circuit Rendering
// =====================
function ShortCircuitRendering() {
  const [hasNotifications, setHasNotifications] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPremium, setIsPremium] = useState(false);

  return (
    <div>
      <h2>Short Circuit && Rendering</h2>

      <p>
        {hasNotifications && (
          <span>🔔 You have {notificationCount} new notifications!</span>
        )}
        {!hasNotifications && <span>No new notifications</span>}
      </p>

      <button
        onClick={() => {
          setHasNotifications(true);
          setNotificationCount(notificationCount + 1);
        }}
      >
        Add Notification
      </button>
      <button
        onClick={() => {
          setHasNotifications(false);
          setNotificationCount(0);
        }}
      >
        Clear Notifications
      </button>

      <br />
      <br />

      <p>Role: {isAdmin ? "👑 Admin" : "👤 Regular User"}</p>
      {isAdmin && <p>🔧 Admin Panel: You can manage all users and settings.</p>}
      {isAdmin && <p>🗑️ Admin Panel: You can delete posts and comments.</p>}

      {isPremium && <p>⭐ Premium Feature: Access to exclusive content!</p>}
      {isPremium && <p>⭐ Premium Feature: No advertisements!</p>}

      {!isAdmin && !isPremium && (
        <p>💡 Upgrade your account to unlock more features.</p>
      )}

      <button onClick={() => setIsAdmin(!isAdmin)}>
        Toggle Admin: {isAdmin ? "ON" : "OFF"}
      </button>
      <button onClick={() => setIsPremium(!isPremium)}>
        Toggle Premium: {isPremium ? "ON" : "OFF"}
      </button>
    </div>
  );
}

// =====================
// Component 4 — Multiple Conditions with Switch-like Rendering
// =====================
function MultipleConditions() {
  const [step, setStep] = useState(1);

  function renderStep() {
    if (step === 1) {
      return (
        <div>
          <h3>Step 1 — Personal Info</h3>
          <p>Enter your name and email address to get started.</p>
          <p>📝 Fill in your basic details</p>
        </div>
      );
    } else if (step === 2) {
      return (
        <div>
          <h3>Step 2 — Choose a Plan</h3>
          <p>Select the plan that works best for you.</p>
          <p>💳 Free, Pro or Enterprise</p>
        </div>
      );
    } else if (step === 3) {
      return (
        <div>
          <h3>Step 3 — Review Details</h3>
          <p>Review everything before confirming.</p>
          <p>🔍 Double check your information</p>
        </div>
      );
    } else if (step === 4) {
      return (
        <div>
          <h3>✅ Registration Complete!</h3>
          <p>Welcome aboard! Your account has been created.</p>
          <p>🎉 You are all set to get started</p>
        </div>
      );
    }
  }

  return (
    <div>
      <h2>Multi Step Registration Form</h2>
      <p>Current Step: {step} of 4</p>
      {renderStep()}
      <button onClick={() => setStep(step - 1)} disabled={step === 1}>
        Previous
      </button>
      <button onClick={() => setStep(step + 1)} disabled={step === 4}>
        {step === 3 ? "Submit" : "Next"}
      </button>
      <button onClick={() => setStep(1)}>Start Over</button>
    </div>
  );
}

// =====================
// Component 5 — Loading State Rendering
// =====================
function LoadingState() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [hasError, setHasError] = useState(false);

  function handleFetchSuccess() {
    setIsLoading(true);
    setData(null);
    setHasError(false);

    setTimeout(() => {
      setIsLoading(false);
      setData({
        name: "Ali Haider",
        role: "Frontend Developer",
        city: "Islamabad",
        experience: "1 year",
      });
    }, 2000);
  }

  function handleFetchError() {
    setIsLoading(true);
    setData(null);
    setHasError(false);

    setTimeout(() => {
      setIsLoading(false);
      setHasError(true);
    }, 2000);
  }

  function handleReset() {
    setIsLoading(false);
    setData(null);
    setHasError(false);
  }

  return (
    <div>
      <h2>Loading State Rendering</h2>

      {!isLoading && !data && !hasError && (
        <p>Click a button to simulate fetching data.</p>
      )}

      {isLoading && <p>⏳ Loading data, please wait...</p>}

      {hasError && (
        <div>
          <p>❌ Error: Failed to fetch data. Please try again.</p>
        </div>
      )}

      {data && !isLoading && (
        <div>
          <p>✅ Data loaded successfully!</p>
          <p>Name: {data.name}</p>
          <p>Role: {data.role}</p>
          <p>City: {data.city}</p>
          <p>Experience: {data.experience}</p>
        </div>
      )}

      <button onClick={handleFetchSuccess} disabled={isLoading}>
        Fetch Data ✅
      </button>
      <button onClick={handleFetchError} disabled={isLoading}>
        Simulate Error ❌
      </button>
      <button onClick={handleReset} disabled={isLoading}>
        Reset
      </button>
    </div>
  );
}

// =====================
// Component 6 — Role Based Rendering
// =====================
function RoleBasedRendering() {
  const [role, setRole] = useState("guest");

  function renderContent() {
    if (role === "guest") {
      return (
        <div>
          <p>👤 Guest Access</p>
          <p>You can view public content only.</p>
          <p>🔒 Login required for more features.</p>
        </div>
      );
    } else if (role === "user") {
      return (
        <div>
          <p>✅ User Access</p>
          <p>You can view and create content.</p>
          <p>✉️ You have access to messaging.</p>
          <p>🔒 Admin features are restricted.</p>
        </div>
      );
    } else if (role === "moderator") {
      return (
        <div>
          <p>🛡️ Moderator Access</p>
          <p>You can view, create and edit content.</p>
          <p>🗑️ You can remove inappropriate posts.</p>
          <p>👥 You can manage regular users.</p>
          <p>🔒 Admin settings are restricted.</p>
        </div>
      );
    } else if (role === "admin") {
      return (
        <div>
          <p>👑 Admin Access</p>
          <p>You have full access to everything.</p>
          <p>⚙️ Manage all site settings.</p>
          <p>👥 Manage all users and roles.</p>
          <p>🗑️ Delete any content or account.</p>
          <p>📊 View analytics and reports.</p>
        </div>
      );
    }
  }

  return (
    <div>
      <h2>Role Based Rendering</h2>
      <p>
        Current Role: <strong>{role.toUpperCase()}</strong>
      </p>
      {renderContent()}
      <br />
      <button onClick={() => setRole("guest")}>Guest</button>
      <button onClick={() => setRole("user")}>User</button>
      <button onClick={() => setRole("moderator")}>Moderator</button>
      <button onClick={() => setRole("admin")}>Admin</button>
    </div>
  );
}

// =====================
// App — Combines Everything
// =====================
function App() {
  return (
    <div>
      <h1>Month 2 - Week 4 - Day 3: Conditional Rendering</h1>
      <p>Exploring conditional rendering through 6 different examples</p>
      <hr />

      <BasicConditional />
      <hr />

      <TernaryRendering />
      <hr />

      <ShortCircuitRendering />
      <hr />

      <MultipleConditions />
      <hr />

      <LoadingState />
      <hr />

      <RoleBasedRendering />
    </div>
  );
}

export default App;
