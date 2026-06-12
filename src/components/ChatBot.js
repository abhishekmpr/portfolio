import { useState } from "react";
import axios from "axios";

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [unknownQuestion, setUnknownQuestion] = useState("");

const [name, setName] = useState("");
const [email, setEmail] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi 👋 Ask me about Abhishek."
    }
  ]);
const submitLead = async () => {

  const lead = {
    name,
    email,
    question: unknownQuestion
  };

  try {

    const response = await axios.post(
      "https://localhost:7139/api/Lead",
      lead
    );

    console.log(response.data);

    alert("Thank you! Abhishek will contact you.");

    setName("");
    setEmail("");
    setShowLeadForm(false);

  }
catch(error)
{
    console.log("FULL ERROR:", error);

    console.log("RESPONSE:", error.response);

    console.log("DATA:", error.response?.data);

    alert(JSON.stringify(error.response?.data));
}
};

  const sendMessage = async () => {

  if (!message.trim()) return;

  const userMessage = {
    sender: "user",
    text: message
  };

  setMessages(prev => [...prev, userMessage]);

  try {

    // ==========================
    // OPENROUTER AI CODE
    // Uncomment later
    // ==========================

    /*
    const response = await axios.post(
      "https://localhost:7139/api/AI",
      JSON.stringify(message),
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    const aiAnswer =
      response.data?.choices?.[0]?.message?.content ||
      response.data?.error?.message ||
      "No AI response";

    setMessages(prev => [
      ...prev,
      {
        sender: "bot",
        text: aiAnswer
      }
    ]);

    return;
    */

    // ==========================
    // KNOWLEDGE BASE CHATBOT
    // ==========================

    const q = message.toLowerCase();

    let answer = "";

    if (
      q.includes("skill") ||
      q.includes("technology") ||
      q.includes("tech stack")
    ) {
      answer =
        "Abhishek knows ASP.NET Core MVC, C#, React.js, SQL Server, ADO.NET, Entity Framework, JavaScript, HTML, CSS, Bootstrap and Web API.";
    }
    else if (
      q.includes("project") ||
      q.includes("work")
    ) {
      answer =
        "Abhishek has built Course Selling Platform, Task Management System, Employee Management System and React CRUD applications.";
    }
    else if (
      q.includes("experience")
    ) {
      answer =
        "Abhishek worked as a Graduate Trainee at Motherson Technology Services and completed apprenticeship training at Techpile Technology.";
    }
    else if (
      q.includes("education")
    ) {
      answer =
        "Abhishek completed Diploma Engineering and has strong experience in Full Stack Development.";
    }
    else if (
      q.includes("react")
    ) {
      answer =
        "Yes, Abhishek has experience building applications using React.js, JavaScript and REST APIs.";
    }
    else if (
      q.includes("dotnet") ||
      q.includes(".net") ||
      q.includes("asp.net")
    ) {
      answer =
        "Abhishek specializes in ASP.NET Core MVC, Web API, Entity Framework and SQL Server.";
    }
    else if (
      q.includes("join") ||
      q.includes("available")
    ) {
      answer =
        "Abhishek is available for new opportunities.";
    }
    else {

      answer =
        "I couldn't answer that. Please leave your details and Abhishek will contact you.";

      setUnknownQuestion(message);
      setShowLeadForm(true);
    }

    setMessages(prev => [
      ...prev,
      {
        sender: "bot",
        text: answer
      }
    ]);

  }
  catch (error) {

    console.error(error);

    setMessages(prev => [
      ...prev,
      {
        sender: "bot",
        text: "Something went wrong."
      }
    ]);
  }

  setMessage("");
};
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          padding: "15px",
          borderRadius: "50%",
          background: "#06b6d4",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}
      >
        💬
      </button>

      {isOpen && (
        <div
          style={{
            position: "fixed",
            right: "20px",
            bottom: "80px",
            width: "350px",
            height: "500px",
            background: "#1e293b",
            color: "white",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <div
            style={{
              background: "#06b6d4",
              padding: "15px",
              fontWeight: "bold"
            }}
          >
            AI Portfolio Assistant
          </div>

          <div
            style={{
              flex: 1,
              padding: "10px",
              overflowY: "auto"
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  textAlign:
                    msg.sender === "user"
                      ? "right"
                      : "left",
                  marginBottom: "10px"
                }}
              >
                {msg.text}
              </div>
            ))}
          </div>
          {showLeadForm && (
  <div
    style={{
      padding: "10px",
      borderTop: "1px solid gray"
    }}
  >
    <input
      type="text"
      placeholder="Your Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      style={{
        color:'black',
        width: "100%",
        marginBottom: "5px"
      }}
    />

    <input
      type="email"
      placeholder="Your Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      style={{
        color:'black',
        width: "100%",
        marginBottom: "5px"
      }}
    />

    <button
  onClick={submitLead}
  style={{
    width: "100%",
    padding: "10px",
    cursor: "pointer"
  }}
>
  Contact Abhishek
</button>
  </div>
)}

          <div
            style={{
              display: "flex"
            }}
          >
            <input
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              placeholder="Ask about Abhishek..."
              style={{
                color: 'white',
                background:'#10002b',
                flex: 1,
                padding: "10px"
              }}
            />

            <button
              onClick={sendMessage}
              style={{

                padding: "10px"
              }}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}


export default ChatBot;