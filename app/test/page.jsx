"use client";
import { chatSession } from "@/utils/GeminiAIModel";
import React, { useState } from "react";

function page() {
  const containerStyle = {
    position: "absolute",
    left: "25%",
    top: "10%",
    width: "50%",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };
  const[input, setInput] = useState("");
  const[loading, setLoading] = useState(false);
  const [jsonResponse, setJsonResponse] = useState([]);
  const handleSubmit = async(e)=>{
    setLoading(true);
    e.preventDefault();
    let finalInput = "give me information about " + input + " in form of JSON";
    const result = await chatSession.sendMessage(finalInput);
    const FinalResonse = result.response.text().replace('```json',"").replace('```',"");
    console.log(JSON.parse(FinalResonse));
    setLoading(false);
  }
  
  return (
    <div>
      <form action="">
        <div
          id="search_form"
          className="nes-container with-title"
          style={containerStyle}
        >
          <p className="title text-3xl">Prompt here</p>
          <p className="text-sm text-gray-700">
            After giving prompt check your Console log
          </p>

          <div className="input">
            <label>Give any prompt</label>
            <input
              type="text"
              className="nes-input border rounded-xl ml-10 text-black p-1"
              onChange={(e)=>setInput(e.target.value)}
            />
          </div>
          <br />
          <div className="input flex items-center">
            <button disabled={loading} type="submit" onClick={handleSubmit} className="nes-btn bg-gray-500 p-2 rounded-xl">
              {
                loading?"loading...." : "Submit"
              }
              
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default page;
