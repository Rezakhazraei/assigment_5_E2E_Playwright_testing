Dog API - React + Express + TypeScript
A full-stack application that fetches random dog images from the Dog CEO API. Built with React (frontend) and Express (backend) using TypeScript.

🎯 Features
React Frontend - Interactive UI with smooth animations
Express Backend - RESTful API with service layer pattern
TypeScript - Fully typed for development safety
Environment Configuration - Configurable backend URL via .env files
Error Handling - Comprehensive error handling at all layers
CORS Enabled - Ready for cross-origin requests
Service Layer Pattern - Clean functional architecture (no OOP)
📋 Prerequisites
Before you begin, ensure you have installed:

Node.js (v18 or higher) - Download
npm (comes with Node.js)
Git - Download
Verify installation:

node --version
npm --version
🚀 Quick Start
1. Clone the Repository
git clone <repository-url>
cd dogapi
(Optional) Remove Git History
If you want to use this template for your own project without the original git history:

Using File Explorer (Easiest):

Open the project folder in File Explorer
Enable "Show hidden files" (View → Show → Hidden items)
Find and delete the .git folder
Using Command Line:

Windows (PowerShell):

Remove-Item -Recurse -Force .git
Windows (Command Prompt):

rmdir /s /q .git
macOS/Linux:

rm -rf .git
After removing the .git folder, you can initialize a new repository:

git init
git add .
git commit -m "Initial commit"
2. Install Dependencies
Install backend dependencies:

cd server
npm install
cd ..
Install frontend dependencies:

npm install
3. Start the Backend Server
Open a terminal in the server directory:

cd server
npm run dev
Expected output:

Server is running on http://localhost:5000
Dog API endpoint: http://localhost:5000/api/dogs/random
4. Start the Frontend Application
Open a new terminal in the project root:

npm run dev
The application will open at http://localhost:5173

📁 Project Structure
dogapi/
├── server/                          # Backend (Express + TypeScript)
│   ├── index.ts                    # Main server file
│   ├── package.json                # Backend dependencies
│   ├── tsconfig.json               # TypeScript config
│   ├── .env                        # Environment variables
│   ├── .env.example                # Example env file
│   ├── services/
│   │   └── dogService.ts          # API call logic
│   ├── controllers/
│   │   └── dogController.ts       # Request handlers
│   ├── routes/
│   │   └── dogRoutes.ts           # API routes
│   ├── node_modules/               # Installed packages
│   └── test.rest                   # REST client tests
│
├── src/                            # Frontend (React + TypeScript)
│   ├── App.tsx                    # Main App component
│   ├── App.css                    # Styling
│   ├── main.tsx                   # React entry point
│   └── index.css                  # Global styles
│
├── .env                           # Frontend environment
├── .env.example                   # Frontend env example
├── package.json                   # Frontend dependencies
├── vite.config.ts                 # Vite config
└── README.md                      # This file
🔧 Configuration
Backend Environment Variables
Edit server/.env:

DOG_API_URL=https://dog.ceo/api/breeds/image/random
PORT=5000
Frontend Environment Variables
Edit .env:

VITE_BACKEND_URL=http://localhost:5000
For production, use .env.production:

VITE_BACKEND_URL=https://your-production-backend.com
🌐 API Endpoints
Health Check
GET http://localhost:5000/api/health
Response:

{
  "status": "Server is running"
}
Get Random Dog Image
GET http://localhost:5000/api/dogs/random
Response:

{
  "success": true,
  "data": {
    "imageUrl": "https://images.dog.ceo/breeds/...",
    "status": "success"
  }
}
🧪 Testing with REST Client
Install the REST Client extension in VS Code.

Open server/test.rest and click "Send Request" buttons to test endpoints.

📚 Available Scripts
Frontend
npm run dev - Start development server
npm run build - Build for production
npm run lint - Run ESLint
Backend
npm run dev - Start with watch mode (auto-reload)
npm run start - Run production build
npm run build - Compile TypeScript
🐛 Troubleshooting
"Cannot find module 'express'" or other package errors
Solution: Make sure you've run npm install in both the root and server directories.

npm install           # In root directory
cd server
npm install          # In server directory
Backend port already in use
Change the PORT in server/.env:

PORT=3001
Then update frontend .env:

VITE_BACKEND_URL=http://localhost:3001
CORS errors
Ensure the backend is running and VITE_BACKEND_URL in .env matches the backend address.

Images not loading
Check that both frontend and backend are running
Open browser DevTools (F12) → Network tab
Check API response status code
🏗️ Architecture
Service Layer Pattern
The backend uses a functional service layer pattern (no classes):

Routes (routes/) - Define API endpoints
Controllers (controllers/) - Handle HTTP requests/responses
Services (services/) - Business logic and API calls
HTTP Request → Route → Controller → Service → Response
📦 Technologies Used
Frontend: React 19, TypeScript, Vite, CSS3
Backend: Express.js, TypeScript, Node.js
Tools: TSX, ESLint, CORS
External API: Dog CEO API
🚀 Deployment
Backend (Express)
Build: cd server && npm run build
Deploy to Heroku, Render, or any Node.js hosting
Set environment variables in hosting platform
Start with: npm run start
Frontend (React)
Build: npm run build
Deploy to Vercel, Netlify, or GitHub Pages
Set VITE_BACKEND_URL to production backend URL
Build for production: npm run build
📝 Learning Objectives
This project demonstrates:

✅ React hooks (useState, useEffect)
✅ TypeScript interfaces and types
✅ Express server setup
✅ RESTful API design
✅ Service layer architecture
✅ Error handling patterns
✅ Environment configuration
✅ CORS in web applications
✅ Async/await patterns
✅ CSS animations
🤝 Contributing
Students are encouraged to:

Add new features
Improve error handling
Enhance UI/UX
Add unit tests
Optimize performance
📞 Support
If you encounter issues:

Check the Troubleshooting section
Verify all prerequisites are installed
Check terminal output for error messages
Review browser console for client-side errors
📄 License
MIT License - Feel free to use this for learning purposes.

Happy Learning! 🐕 import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([ globalIgnores(['dist']), { files: ['**/*.{ts,tsx}'], extends: [ // Other configs... // Enable lint rules for React reactX.configs['recommended-typescript'], // Enable lint rules for React DOM reactDom.configs.recommended, ], languageOptions: { parserOptions: { project: ['./tsconfig.node.json', './tsconfig.app.json'], tsconfigRootDir: import.meta.dirname, }, // other options... }, }, ])
