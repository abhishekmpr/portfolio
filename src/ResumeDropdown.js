import React, { useState } from "react";

function ResumeDropdown() {
  const [showResume, setShowResume] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={() => setShowResume(!showResume)}
        className="bg-gray-500 hover:bg-cyan-600 px-6 py-3 rounded-lg"
      >
        Resume
      </button>

      {showResume && (
        <div
          className="bg-white text-black rounded shadow-lg"
          style={{
            position: "absolute",
            top: "50px",
            left: "0",
            minWidth: "220px",
            zIndex: 1000,
          }}
        >
          <a
            href="/DotNet_Resume.pdf"
            download
            className="block p-3 hover:bg-gray-200"
          >
            .NET Developer Resume
          </a>

          <a
            href="/FullStack_Resume.pdf"
            download
            className="block p-3 hover:bg-gray-200"
          >
            Full Stack Resume
          </a>

          <a
            href="/React_Resume.pdf"
            download
            className="block p-3 hover:bg-gray-200"
          >
            React Developer Resume
          </a>

          <a
            href="/SDE_Resume.pdf"
            download
            className="block p-3 hover:bg-gray-200"
          >
            Software Engineer Resume
          </a>
        </div>
      )}
    </div>
  );
}

export default ResumeDropdown;