import { useEffect, useState } from "react";
import Dropdown from "./components/Dropdown";
import { supportedLanguages } from "./data";
import axios from "axios";
import { FaArrowRightArrowLeft } from "react-icons/fa6";

import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [text, setText] = useState("");
  const [show, setShow] = useState("");
  const [sourceLanguage, setSourceLanguage] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setShow("");
    }, 10000); // Hide show after 5 seconds
  }, [show]);

  useEffect(() => {
    console.log(sourceLanguage, targetLanguage);
  }, [sourceLanguage, targetLanguage]);

  const translate = async () => {
    if (!sourceLanguage || !targetLanguage) {
      toast.error("Please select both languages", {
        position: "top-center",
        theme: "colored",
      });
      return;
    }

    if(text === ""){
      toast.error("Please Enter text", {
        position: "top-center",
        theme: "colored",
      });
    }

    let required = {
      source_language: sourceLanguage,
      target_language: targetLanguage,
      text: text,
    };

    let response = await axios.post(
      "https://text-translator2.p.rapidapi.com/translate",
      required,
      {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "X-RapidAPI-Key": "c6b77b25a9msh4fe51e21727aad3p171430jsn50b8fc836df7",
          "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
        },
      }
    );

    toast.success("Your text is Translated 😉", {
      position: "top-center",
      theme: "colored",
    });

    setShow(response.data.data.translatedText);
  };

  return (
    <div className="flex flex-col text-center justify-center items-center h-screen">
      <h1 className="text-5xl font-bold mb-10 font-mono">Text Translator</h1>
      <div className="flex justify-center items-center gap-2">
        <Dropdown
          onChangeFn={(e) => setSourceLanguage(e.target.value)}
          supportedLanguages={supportedLanguages}
          label="Source Language"
        />
        
        <Dropdown
          onChangeFn={(e) => setTargetLanguage(e.target.value)}
          supportedLanguages={supportedLanguages}
          label="Target Language"
        />
      </div>
      <div className="flex items-center justify-center">
        <div className="relative m-3 p-2">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="bg-zinc-200 p-3 rounded-lg w-[300px]  "
            autoComplete="off"
            placeholder="Enter Text...."
            name="text"
            type="text"
          />
        </div>
        <button
          onClick={translate}
          type="button"
          className="rounded-md bg-green-600 px-5 py-2 text-md font-semibold text-white "
        >
          Translate
        </button>
      </div>
      {show && (
        <h1 className="text-xl font-semibold tracking-widest">
          "{text}" IS TRANSLATED IN "{show}"{" "}
        </h1>
      )}

    <ToastContainer />
    </div>
  );
}

export default App;
