## ⚡️🧠 NovaCode AI – The open-source micro SaaS that supercharges your coding with AI.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Now-brightgreen)](https://novacode-ai.vercel.app/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repo-blue)](https://github.com/nishantkr2003/alpha_project.git)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<p align="center">
  <img src="https://novacode-ai.vercel.app/logo.png" alt="NovaCode AI Logo" width="100" />
</p>

Welcome to **NovaCodeAI**! 🚀

**NovaCodeAI** is an application designed to revolutionize the way developers interact with code.

Whether you're a seasoned developer or just starting out, NovaCodeAI streamlines your workflow, making coding faster, smarter, and more enjoyable.

## ✨ Features That Empower You

- **🤖 AI-Powered Code Generation**: Harness the power of Google's Gemini AI to convert your ideas into functional code. Simply describe what you want, and watch as NovaCode AI generates code snippets or even entire project structures for you.

- **💬 Intelligent AI Chat Assistant**: Engage in conversation with the AI to get coding advice, explanations, or help with debugging.

- **🖥 Interactive Workspace**: Work within a user-friendly environment where you can edit code, converse with the AI, and visualize your projects instantly.

- **💻 Live Code Preview**: Utilize Sandpack to get a real-time, interactive code editing and preview environment that updates as you type.

- **💰 Flexible Pricing**: NovaCode AI offers plans tailored to your needs, including a free tier for casual users and premium plans for power users, ensuring everyone can benefit from its features.

- **🔒 Secure Authentication**: Secure and straightforward login experience with Google OAuth, keeping your projects safe and accessible only to you.

- **💳 Seamless Payments**: Upgrade your plan effortlessly with our integrated PayPal payment system, handling all transactions securely.

- **💾 Persistent Storage**: Your work is important. With Convex, your projects are saved and accessible across all your sessions, from any device.

- **🎨 Customizable Themes and Settings**: Personalize your workspace with customizable themes and settings to suit your coding style.

- **🌐 Cross-Platform Accessibility**: Access NovaCode AI from any device with a web browser. It's cloud-based, so there's nothing to install.

## 🌐 Live Demo

Ready to experience NovaCode AI in action? Check out our live demo:

👉 **[Live Demo](https://novacode-ai.vercel.app/)**

## 🖼 Preview

<p align="center">
  <img src="/novacode.png" alt="NovaCode AI Workspace Screenshot" width="800" style="border-radius: 12px; box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);" />
</p>

<p align="center">
  <em>Experience real-time code editing, AI assistance, and project visualization — all in one place.</em>
</p>

<br/>

### ✨ Feature-Rich Interface

<p align="center">
  <img src="/project.png" alt="NovaCode AI Feature Highlight" width="800" style="border-radius: 12px; box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);" />
</p>

<p align="center">
  <em>Explore intelligent code generation, chat assistance, theme customization, and seamless workspace management.</em>
</p>


## 🛠 Technologies Powering NovaCode AI

NovaCode AI is built with a modern stack designed for performance, scalability, and an excellent developer experience:

- **[Next.js](https://nextjs.org/)**: For building server-side rendered, SEO-friendly, and highly performant React applications.

- **[React](https://reactjs.org/)**: The core of our UI, providing a declarative and component-based approach to building interfaces.

- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework that allows for rapid and custom UI development without leaving your HTML.

- **[Convex](https://www.convex.dev/)**: Our backend platform of choice for seamless data storage, real-time updates, and serverless functions.

- **[Google Generative AI](https://ai.google/)**: Brings advanced AI capabilities, including natural language processing and code generation, to your fingertips.

- **[Sandpack](https://sandpack.codesandbox.io/)**: Enables live, interactive code editing and preview capabilities.

- **[PayPal API](https://developer.paypal.com/docs/api/overview/)**: For secure and straightforward payment processing, making plan upgrades a breeze.

- **[Lucide React](https://lucide.dev/docs/lucide-react)**: A library of beautiful, open-source icons to enhance the visual appeal of your projects.

## 🚀 Getting Started: Your Journey with NovaCode AI

Embarking on your NovaCode AI journey is easy. Follow these steps to get started:

### 1. **Clone the Repository**

```bash
git clone https://github.com/nishantkr2003/alpha_project.git
cd alpha_project
```

### 2. **Install Dependencies**

You can use npm, yarn, pnpm, or bun to install the required packages:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. **Set Up Environment Variables**

Create a `.env` file at the root of the project and populate it with your API keys and configuration details. Refer to `

```ini
NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID=<your_google_auth_client_id>
CONVEX_DEPLOYMENT=<your_convex_deployment>
NEXT_PUBLIC_CONVEX_URL=<your_convex_url>
NEXT_PUBLIC_GEMINI_API_KEY=<your_gemini_api_key>
NEXT_PUBLIC_PAYPAL_CLIENT_ID=<your_paypal_client_id>
```

**Note**: You'll need to obtain API keys from the respective services.

### 4. **Launch the Development Server**

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open `http://localhost:3000` in your browser to experience NovaCode AI locally.

### 5. **Build for Production**

To build the application for production:

```bash
npm run build
```

## 📂 Project Structure: A Deep Dive

Understanding the project structure helps with contributions and customizations:

```
alpha_project/
├── app/                      # Main application logic
│   ├── (main)/               # Main app routes and layouts
        ├── HelpCenter/       # Help page       
│   │   ├── pricing/          # Pricing page
│   │   ├── settings/         # Setting page
│   │   └── workspace/        # Workspace page for projects
│   ├── api/                  # API routes
│   │   ├── ai-chat/          # AI chat API endpoint
│   │   └── gen-ai-code/      # Code generation API endpoint
│   ├── ConvexClientProvider.jsx # Convex provider setup
│   ├── globals.css           # Global styles
│   ├── layout.js             # Root layout
│   ├── page.js               # Home page
│   └── provider.jsx          # Global state providers
├── components/               # Reusable UI components
│   ├── custom/               # Custom application-specific components
│   └── ui/                   # Shadcn UI components
├── configs/                  # Configuration for AI models and other settings
├── context/                  # React context for global state
├── convex/                   # Convex backend functions
│   ├── schema.js             # Database schema
│   ├── users.js              # User-related database operations
│   ├── workspace.js          # Workspace-related database operations
│   └── _generated/           # Auto-generated Convex files
├── data/                     # Static data (prompts, lookups, colors)
├── hooks/                    # Custom React hooks
├── lib/                      # Utility functions
├── public/                   # Public assets (images, icons)
├── .env.example              # Example environment variables
├── components.json           # Shadcn UI components configuration
├── jsconfig.json             # JavaScript configuration
├── next.config.mjs           # Next.js configuration
├── novacode.png              # PRoject Image
├── package.json              # Project dependencies and scripts
├── postcss.config.mjs        # PostCSS configuration
├── project.png               # Project Image
└── tailwind.config.mjs       # Tailwind CSS configuration
```


## 📝 License

NovaCode AI is proudly open-source, licensed under the [MIT License](LICENSE). This permissive license allows you to use, modify, and distribute the code, ensuring that NovaCode AI remains a community-driven project.

## 📞 Contact & Support

Encounter an issue? Have a suggestion? Or just want to chat about the project? Feel free to reach out:

- **Email**: [nishantkr2003nna@gmail.com](mailto:nishantkr2003nna@gmail.com)
- **GitHub Issues**: For bug reports and feature requests, please open an issue on our [GitHub repository](https://github.com/nishantkr2003/alpha_project.git/issues).

## 🌟 Star the Project

If you find NovaCode AI useful, please consider giving it a star on GitHub! ⭐ It helps others find the project and motivates us to keep improving.

---

Crafted with ❤️ by Nishant. Let's revolutionize coding together with NovaCode AI! 🎉
