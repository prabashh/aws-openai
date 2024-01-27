// see https://platform.openai.com/docs/guides/function-calling
import {
  BACKEND_API_URL,
  AWS_API_GATEWAY_KEY,
  OPENAI_EXAMPLES_URL,
} from "../config";

const SLUG = "openai-function-calling";

const FunctionCalling = {
  sidebar_title: "OpenAI Function Calling",
  api_url: BACKEND_API_URL + SLUG,
  api_key: AWS_API_GATEWAY_KEY,
  app_name: "OpenAI Function Calling",
  assistant_name: "Liam",
  avatar_url: "/applications/SarcasticChat/Marv.svg",
  background_image_url: "/applications/SarcasticChat/SarcasticChat-bg.png",
  welcome_message: `Hello, I'm Liam, an adaptive chatbot. I use natural language processing to adapt myself to your prompts. I leverage OpenAI API 'Function Calling' features to provide enhanced real-time responses to prompts about the weather, and also about my creator, Lawrence McDaniel. But I can also behave like a regular chatbot. See if you can detect which responses are generated by OpenAI API versus those generated by custom Python code running inside Amazon Web Services.`,
  example_prompts: [
    '"In what year was William Shakespear 25 years old?"',
    '"what is the weather like right now in Fargo, North Dakota?"',
    '"tell me about your creator"',
    '"what is a good roast chicken recipe?"',
    '"send me some information about lawrence"',
    '"where can I get an everlasting gobstopper, and, what is it exactly?"',
    '"send me a link for a discount code for an everlasting gobstopper"',
    '"Are Lawrence McDaniel and Chuck Norris friends?"',
  ],
  placeholder_text: `ask me anything`,
  info_url: OPENAI_EXAMPLES_URL + SLUG,
  file_attach_button: false,
  uses_openai: true,
  uses_openai_api: false,
  uses_langchain: true,
  uses_memory: true,
};

export default FunctionCalling;
