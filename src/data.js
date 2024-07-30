// apiUtils.js

export const supportedLanguages = {
    Afrikaans: "af",
    Albanian: "sq",
    Amharic: "am",
    Arabic: "ar",
    Armenian: "hy",
    Azerbaijani: "az",
    Basque: "eu",
    Belarusian: "be",
    Bengali: "bn",
    Bosnian: "bs",
    Bulgarian: "bg",
    Catalan: "ca",
    Cebuano: "ceb",
    Chichewa: "ny",
    "Chinese (Simplified)": "zh-CN",
    "Chinese (Traditional)": "zh-TW",
    Corsican: "co",
    Croatian: "hr",
    Czech: "cs",
    Danish: "da",
    Dutch: "nl",
    English: "en",
    Esperanto: "eo",
    Estonian: "et",
    Filipino: "tl",
    Finnish: "fi",
    French: "fr",
    Frisian: "fy",
    Galician: "gl",
    Georgian: "ka",
    German: "de",
    Greek: "el",
    Gujarati: "gu",
    "Haitian Creole": "ht",
    Hausa: "ha",
    Hawaiian: "haw",
    Hebrew: "iw",
    Hindi: "hi",
    Hmong: "hmn",
    Hungarian: "hu",
    Icelandic: "is",
    Igbo: "ig",
    Indonesian: "id",
    Irish: "ga",
    Italian: "it",
    Japanese: "ja",
    Javanese: "jw",
    Kannada: "kn",
    Kazakh: "kk",
    Khmer: "km",
    Kinyarwanda: "rw",
    Korean: "ko",
    "Kurdish (Kurmanji)": "ku",
    Kyrgyz: "ky",
    Lao: "lo",
    Latin: "la",
    Latvian: "lv",
    Lithuanian: "lt",
    Luxembourgish: "lb",
    Macedonian: "mk",
    Malagasy: "mg",
    Malay: "ms",
    Malayalam: "ml",
    Maltese: "mt",
    Maori: "mi",
    Marathi: "mr",
    Mongolian: "mn",
    "Myanmar (Burmese)": "my",
    Nepali: "ne",
    Norwegian: "no",
    "Odia (Oriya)": "or",
    Pashto: "ps",
    Persian: "fa",
    Polish: "pl",
    Portuguese: "pt",
    Punjabi: "pa",
    Romanian: "ro",
    Russian: "ru",
    Samoan: "sm",
    "Scots Gaelic": "gd",
    Serbian: "sr",
    Sesotho: "st",
    Shona: "sn",
    Sindhi: "sd",
    Sinhala: "si",
    Slovak: "sk",
    Slovenian: "sl",
    Somali: "so",
    Spanish: "es",
    Sundanese: "su",
    Swahili: "sw",
    Swedish: "sv",
    Tajik: "tg",
    Tamil: "ta",
    Tatar: "tt",
    Telugu: "te",
    Thai: "th",
    Turkish: "tr",
    Turkmen: "tk",
    Ukrainian: "uk",
    Urdu: "ur",
    Uyghur: "ug",
    Uzbek: "uz",
    Vietnamese: "vi",
    Welsh: "cy",
    Xhosa: "xh",
    Yiddish: "yi",
    Yoruba: "yo",
    Zulu: "zu"
  };
  
  // export const translateText = async (sourceLanguage, targetLanguage, text) => {
  //   const url = "https://text-translator2.p.rapidapi.com/translate";
  //   const apiKey = "61fe42194dmsha3e696751cf48edp14633fjsn5dd03c4a1e74";
  
  //   const options = {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/x-www-form-urlencoded",
  //       "X-RapidAPI-Key": apiKey,
  //       "X-RapidAPI-Host": "text-translator2.p.rapidapi.com"
  //     },
  //     body: new URLSearchParams({
  //       source_language: sourceLanguage,
  //       target_language: targetLanguage,
  //       text: text
  //     })
  //   };
  
  //   try {
  //     const response = await fetch(url, options);
  //     const result = await response.json();
  
  //     if (result.status === "success") {
  //       const translatedText = JSON.parse(`"${result.data.translatedText}"`);
  //       return translatedText;
  //     } else {
  //       throw new Error("Translation failed.");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     throw new Error("Error occurred during translation.");
  //   }
  // };
  