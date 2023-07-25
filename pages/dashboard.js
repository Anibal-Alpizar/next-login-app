import axios from "axios";
import { useState } from "react";

function Dashboard() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const getProfile = async () => {
    const response = await axios.get("/api/profile");
    console.log(response);
    setUser(response.data);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button onClick={() => getProfile()}>Get Profile</button>
    </div>
  );
}

export default Dashboard;
