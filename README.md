
# Getting Started with setup of Gemini AI

### npm install Gemini AI
```zsh
npm install @google/generative-ai
```
### Generate API Key from this site
```bash
ai.google.dev
```

- After visiting this site scroll littel bit down.
- click on **Get API Key in Google AI Studio**.
- Click on **Get API Key**.
- After Completing this, Click on Create new Prompt and Copy code by clicking on **Get Code**.

### Create Environment Variable for your Gemini AI API
```.env
GEMINI_API_KEY = I5fZ******uybT89
```

### The Code is to Setup Gemini AI
GeminiAIModel.js
```javascript
const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY ;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export const chatSession = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings
  // See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [],
});


```

### Once the setup done we are Ready to interact with AI...
This is just a demo that how you can work or deal with Response that you get from AI

```javascript
import { chatSession } from "@/utils/GeminiAIModel";
const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    let finalInput = "give me information about " + input + " in form of JSON";
    const result = await chatSession.sendMessage(finalInput);
    const FinalResonse = result.response
      .text()
      .replace("```json", "")
      .replace("```", "");
    console.log(JSON.parse(FinalResonse));
    setLoading(false);
  };
```

### Congratulations❤️..... Your website just got an upgrade!
With the power of AI now integrated, your platform is smarter, faster, and ready to deliver an exceptional user experience. Get ready to be amazed by the new capabilities at your fingertips!


