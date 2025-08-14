import React, { useState } from "react";

const App = () => {
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");

  const submit = async () => {
    const uel = document.getElementById("url").value.trim();

    if (!uel) {
      setError("Please enter a URL");
      return;
    }

    try {
      const VITE_BITLY_TOKEN = import.meta.env.VITE_BITLY_TOKEN;
      const res = await fetch("https://api-ssl.bitly.com/v4/shorten", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${VITE_BITLY_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          long_url: uel,
          domain: "bit.ly",
          // Remove group_guid unless you specifically need it
        }),
      });

      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }

      const data = await res.json();
      setShortUrl(data.link);
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col gap-6 justify-center items-center bg-black h-screen w-full text-white">
      <input
        id="url"
        name="url"
        type="text"
        placeholder="Enter a long URL"
        className="bg-orange-600 h-12 text-xl w-[50%] px-4 rounded"
      />
      <button
        onClick={submit}
        className="bg-black hover:bg-orange-600 hover:text-white border-orange-600 border-2 px-5 py-2 rounded"
      >
        Shorten
      </button>

      {shortUrl && (
        <div>
          Shortened URL:{" "}
          <a href={shortUrl} target="_blank" rel="noreferrer" className="text-blue-400 underline">
            {shortUrl}
          </a>
        </div>
      )}

      {error && <div className="text-red-400">{error}</div>}
    </div>
  );
};

export default App;
