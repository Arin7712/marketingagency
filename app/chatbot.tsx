// pages/chatbot.js
import Script from "next/script";

export default function ChatbotPage() {
  return (
    <div>
      <h1>Chatbot Page</h1>
      <Script
        id="chatbot-config"
        dangerouslySetInnerHTML={{
          __html: `
            window.embeddedChatbotConfig = {
              chatbotId: "tB0PUhi2Mk3TAhijvu03l",
              domain: "www.chatbase.co"
            };
          `,
        }}
      />
      <Script
        src="https://www.chatbase.co/embed.min.js"
        chatbotId="tB0PUhi2Mk3TAhijvu03l"
        domain="www.chatbase.co"
        strategy="lazyOnload"
      />
    </div>
  );
}
