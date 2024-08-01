import { useState } from "react";

function App() {
  let [person, setPerson] = useState({
    firstName: "",
    lastName: "",
  });

  return (
    <div>
      {person.firstName} - {person.lastName}
      <form>
        <input
          onChange={(e) => setPerson({ ...person, firstName: e.target.value })}
          value={person.firstName}
        />

        <input
          onChange={(e) => setPerson({ ...person, lastName: e.target.value })}
          value={person.lastName}
        />
      </form>
    </div>
  );
}

export default App;
