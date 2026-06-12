import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { saveAs } from "file-saver";

function Admin() {
const [search, setSearch] = useState("");
  const [leads, setLeads] = useState([]);



  const exportCSV = () => {

  const csv =
    [
      ["Id", "Name", "Email", "Question"],

      ...leads.map(l => [
        l.id,
        l.name,
        l.email,
        l.question
      ])
    ]
    .map(e => e.join(","))
    .join("\n");

  const blob = new Blob(
    [csv],
    {
      type: "text/csv;charset=utf-8;"
    }
  );

  saveAs(blob, "Leads.csv");
};
  const fetchLeads = async () => {

    try {

      const response = await axios.get(
        "https://localhost:7139/api/Lead"
      );

      setLeads(response.data);

    }
    catch (error) {

      console.log(error);
    }
  };

  useEffect(() => {

    fetchLeads();

  }, []);

  if (localStorage.getItem("admin") !== "true") {
    return <Navigate to="/login" />;
  }

  const logout = () => {

    localStorage.removeItem("admin");

    window.location.href = "/login";
  };

  return (
    <div
      style={{
        padding: "30px",
        minHeight: "100vh",
        background: "#0f172a",
        color: "white"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px"
        }}
      >
        <h1>Admin Dashboard</h1>

        <button
          onClick={logout}
          style={{
            padding: "10px 20px",
            cursor: "pointer"
          }}
        >
          Logout
        </button>
      </div>

      <h2>
        Total Leads: {leads.length}
      </h2>
<input
  type="text"
  placeholder="Search Leads..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  style={{
    padding: "10px",
    width: "300px",
    marginBottom: "20px"
  }}
/>
<div
  style={{
    display: "flex",
    gap: "20px",
    marginBottom: "20px"
  }}
>
  <div
    style={{
      background: "#06b6d4",
      padding: "20px",
      borderRadius: "10px",
      minWidth: "200px"
    }}
  >
    <h3>Total Leads</h3>
    <h1>{leads.length}</h1>
  </div>
</div>
      <table
        border="1"
        cellPadding="10"
        style={{
          width: "100%",
          marginTop: "20px",
          background: "white",
          color: "black"
        }}
      >
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Question</th>
          </tr>
        </thead>

        <tbody>
          {leads
  .filter(
    (lead) =>
      lead.name
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      lead.email
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      lead.question
        ?.toLowerCase()
        .includes(search.toLowerCase())
  )
  .map((lead) => (
            <tr key={lead.id}>
              <td>{lead.id}</td>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.question}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
  onClick={exportCSV}
  style={{
    padding: "10px",
    marginBottom: "20px"
  }}
>
  Export CSV
</button>
    </div>
  );
}

export default Admin;