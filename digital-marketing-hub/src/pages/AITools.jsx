import "./AITools.css";

const aiTools = [
  {
    icon: "🤖",
    title: "ChatGPT",
    category: "AI Assistant",
    description:
      "AI assistant for writing, research, coding, learning, analysis, brainstorming and productivity.",
    link: "https://chatgpt.com/",
    pdfLink: "",
    videoLink: "",
    youtubeLink: "https://www.youtube.com/@OpenAI",
  },

  {
    icon: "✨",
    title: "Google Gemini",
    category: "AI Assistant",
    description:
      "Google AI assistant for research, writing, learning, image generation, analysis and everyday productivity.",
    link: "https://gemini.google.com/",
    pdfLink: "",
    videoLink: "",
    youtubeLink: "",
  },

  {
    icon: "🔎",
    title: "Perplexity",
    category: "AI Research",
    description:
      "AI research and answer engine that searches the web and provides answers with citations.",
    link: "https://www.perplexity.ai/",
    pdfLink: "",
    videoLink: "",
    youtubeLink: "",
  },

  {
    icon: "🧠",
    title: "Claude",
    category: "AI Assistant",
    description:
      "AI assistant useful for writing, analysis, coding, documents and complex problem solving.",
    link: "https://claude.ai/",
    pdfLink: "",
    videoLink: "",
    youtubeLink: "",
  },

  {
    icon: "🎨",
    title: "Canva AI",
    category: "AI Design",
    description:
      "AI-powered design tools for social media posts, presentations, graphics, marketing content and visual creation.",
    link: "https://www.canva.com/ai/",
    pdfLink: "",
    videoLink: "",
    youtubeLink: "",
  },

  {
    icon: "🎨",
    title: "Ideogram",
    category: "AI Image",
    description:
      "AI image generation platform for creating creative visuals, graphics, posters and text-based designs.",
    link: "https://ideogram.ai/login",
    pdfLink: "",
    videoLink: "",
    youtubeLink: "https://www.youtube.com/@ideogram_ai",
  },

  {
    icon: "🎙️",
    title: "Voicebox",
    category: "AI Voice",
    description:
      "Open-source local AI voice studio for voice cloning, text-to-speech and voice-powered applications.",
    link: "https://voicebox.sh/download",
    pdfLink: "",
    videoLink: "",
    youtubeLink: "",
  },

  {
    icon: "🗣️",
    title: "Lovevoice AI",
    category: "AI Voice",
    description:
      "AI text-to-speech platform for converting written text into natural-sounding voice audio.",
    link: "https://lovevoice.ai/",
    pdfLink: "",
    videoLink: "",
    youtubeLink: "",
  },

  {
    icon: "📚",
    title: "Gemini Notebook",
    category: "AI Research",
    description:
      "AI-powered research and learning assistant for working with documents, notes, sources and research material.",
    link: "https://workspace.google.com/intl/en_in/products/gemini-notebook/",
    pdfLink: "",
    videoLink: "",
    youtubeLink: "",
  },

  {
    icon: "🗺️",
    title: "SEO Roadmap",
    category: "SEO Learning",
    description:
      "Structured SEO learning roadmap covering important SEO concepts and skills step by step.",
    link: "https://roadmap.sh/seo",
    pdfLink: "",
    videoLink: "",
    youtubeLink: "https://www.youtube.com/@roadmapsh",
  },

  {
    icon: "📍",
    title: "GMB Everywhere",
    category: "Local SEO",
    description:
      "Tool for researching Google Business Profiles and analyzing local search and Google Maps results.",
    link: "https://www.gmbeverywhere.com/",
    pdfLink: "",
    videoLink: "",
    youtubeLink: "",
  },

  {
    icon: "🦅",
    title: "Local Falcon",
    category: "Local SEO",
    description:
      "Local SEO tool for tracking Google Maps and local search visibility across locations.",
    link: "https://www.localfalcon.com/",
    pdfLink: "",
    videoLink: "",
    youtubeLink: "",
  },

  {
    icon: "🔍",
    title: "SEO Minion",
    category: "SEO Tool",
    description:
      "Chrome extension for on-page SEO analysis, broken links, SERP preview and other SEO tasks.",
    link: "https://chromewebstore.google.com/detail/seo-minion/giihipjfimkajhlcilipnjeohabimjhi",
    pdfLink: "",
    videoLink: "",
    youtubeLink: "",
  },

  {
    icon: "🧭",
    title: "MozBar",
    category: "SEO Tool",
    description:
      "SEO toolbar for Chrome and Firefox providing useful SEO metrics and page-level information.",
    link: "https://moz.com/products/pro/seo-toolbar",
    pdfLink: "",
    videoLink: "",
    youtubeLink: "",
  },

  {
    icon: "💻",
    title: "GitHub Copilot",
    category: "AI Coding",
    description:
      "AI coding assistant that helps developers write, understand and work with code.",
    link: "https://github.com/features/copilot",
    pdfLink: "",
    videoLink: "",
    youtubeLink: "",
  },

  {
    icon: "🎬",
    title: "Runway",
    category: "AI Video",
    description:
      "AI creative platform for generating and editing video and other visual content.",
    link: "https://runwayml.com/",
    pdfLink: "",
    videoLink: "",
    youtubeLink: "",
  },
];

function AITools() {
  return (
    <div className="ai-page">

      {/* HEADER */}
      <header className="ai-header">
        <span className="ai-label">DIGITAL MARKETING • AI</span>

        <h1>🤖 AI Tools</h1>

        <p>
          Learn and explore AI tools for content, SEO, design, research,
          voice, video, coding and digital marketing.
        </p>
      </header>

      <main className="ai-container">

        {/* INTRO */}
        <section className="ai-intro">
          <span>AI TOOL COLLECTION</span>

          <h2>Important AI Tools for Digital Marketing</h2>

          <p>
            Use these tools to learn, research, create content, analyze data,
            improve SEO and automate repetitive marketing tasks.
          </p>
        </section>

        {/* CARDS */}
        <section className="ai-grid">

          {aiTools.map((tool) => (
            <div className="ai-card" key={tool.title}>

              <div className="ai-card-top">
                <div className="ai-icon">
                  {tool.icon}
                </div>

                <span className="ai-category">
                  {tool.category}
                </span>
              </div>

              <h3>{tool.title}</h3>

              <p>{tool.description}</p>

              <div className="ai-buttons">

                {tool.pdfLink ? (
                  <a
                    href={tool.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ai-btn pdf"
                  >
                    📄 PDF
                  </a>
                ) : (
                  <button className="ai-btn pdf" disabled>
                    📄 PDF
                  </button>
                )}

                {tool.videoLink ? (
                  <a
                    href={tool.videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ai-btn video"
                  >
                    ▶ Video
                  </a>
                ) : (
                  <button className="ai-btn video" disabled>
                    ▶ Video
                  </button>
                )}

                {tool.youtubeLink ? (
                  <a
                    href={tool.youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ai-btn youtube"
                  >
                    📺 YouTube
                  </a>
                ) : (
                  <button className="ai-btn youtube" disabled>
                    📺 YouTube
                  </button>
                )}

                <a
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ai-btn visit"
                >
                  🔗 Visit
                </a>

              </div>

            </div>
          ))}

        </section>

        {/* IMPORTANT SECTION */}
        <section className="important-ai">

          <div className="important-heading">
            <span>IMPORTANT</span>

            <h2>⚠️ AI Tools Use Carefully</h2>

            <p>
              AI tools can save time, but important business, SEO and
              technical decisions should be checked before publishing or
              implementing them.
            </p>
          </div>

          <div className="important-grid">

            <div>
              <strong>🔎 Verify Information</strong>
              <p>
                Check important facts, statistics, links and claims before
                publishing AI-generated content.
              </p>
            </div>

            <div>
              <strong>✍️ Edit AI Content</strong>
              <p>
                Do not publish raw AI output blindly. Review, improve and add
                useful original information.
              </p>
            </div>

            <div>
              <strong>🔐 Protect Data</strong>
              <p>
                Do not paste passwords, private customer information or
                confidential business data into AI tools.
              </p>
            </div>

            <div>
              <strong>📊 Measure Results</strong>
              <p>
                For marketing work, check actual traffic, engagement, leads
                and conversions instead of relying only on AI suggestions.
              </p>
            </div>

          </div>

        </section>

      </main>

      <footer className="ai-footer">
        <strong>🤖 AI Tools Learning Hub</strong>
        <p>Learn • Practice • Create • Verify • Improve</p>
      </footer>

    </div>
  );
}

export default AITools;