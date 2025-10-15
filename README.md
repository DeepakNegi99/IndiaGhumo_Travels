🌏 IndiaGhumo — Discover, Plan, and Travel Smart 🇮🇳

IndiaGhumo is a full-stack travel planning web application designed to help users explore famous destinations across India, browse travel packages, and view detailed itineraries for their next adventure.
The platform aims to make trip planning easier, smarter, and more personalized — whether it’s a weekend getaway or a long vacation.

🚀 Features
🧭 Explore Destinations

Browse a curated list of popular travel destinations across India.

Filter destinations by region, theme (adventure, spiritual, beaches, heritage), or budget.

🧳 Travel Packages

View comprehensive packages that include accommodation, transport, and activities.

See real-time pricing and availability.

🗓️ Itinerary Management

Get a day-wise itinerary for each trip package.

View highlights, included activities, and optional add-ons.

💬 User Interaction

Option to save favorite destinations for future planning.

Users can submit inquiries or book packages through the site.

☁️ Cloud-Integrated APIs

APIs powered by Azure Functions ensure scalability and serverless performance.

🔒 Secure and Scalable

Backend secured with JWT-based authentication (optional future enhancement).

Continuous integration and deployment with Azure DevOps Pipelines.

🧩 Tech Stack
Layer	Technology	Description
Frontend	React.js + Tailwind CSS / MUI	Dynamic UI built with reusable components
Backend	Node.js + Express.js	RESTful APIs for package and itinerary management
Database	Microsoft SQL Server	Stores destination data, packages, and user details
API Layer	Azure Functions	Cloud-based APIs for serverless data access and automation
Deployment	Azure DevOps	CI/CD pipeline for automated build and release management
Version Control	Git + GitHub	Source code management and collaboration
⚙️ Architecture Overview
[React Frontend] 
      ↓
[Express API Gateway]
      ↓
[Azure Functions] ——→ [MS SQL Database]
      ↓
 [Azure DevOps Pipeline]
      ↓
[Deployed Web App on Azure]


Frontend communicates with Node.js/Express backend via REST APIs.

Express triggers Azure Functions, which handle data fetching and processing from MS SQL.

Azure DevOps manages CI/CD workflows for seamless updates and deployment.

🏗️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-username/IndiaGhumo.git
cd IndiaGhumo

2️⃣ Setup the Backend
cd server
npm install
# Configure your .env file
PORT=5000
DB_USER=your_db_user
DB_PASS=your_db_password
DB_NAME=IndiaGhumoDB
DB_SERVER=your_db_server


Start the server:

npm run dev

3️⃣ Setup the Frontend
cd client
npm install
npm start


Access the app at 👉 http://localhost:3000

☁️ Deployment

The app is deployed using Azure DevOps Pipelines with:

Build Stage: Runs tests, builds React frontend, and packages Node.js backend.

Release Stage: Deploys automatically to Azure Web App and Azure Functions environments.

🧠 Future Enhancements

🔐 User Authentication & Profiles (Sign up, save itineraries)

⭐ Review & Rating System for destinations

🧭 Interactive Maps with Google Maps API

💰 Dynamic Pricing Engine with seasonal offers

📱 PWA Support for mobile-friendly experience

👨‍💻 Contributing

Contributions are welcome!
To contribute:

Fork the repository.

Create a feature branch:

git checkout -b feature/your-feature


Commit your changes and push the branch.

Open a pull request for review.

🧾 License

This project is licensed under the MIT License — feel free to use and modify it for your own projects.

💡 Author

👤 Deepak Negi
Web Developer | .NET & React Enthusiast
🔗 LinkedIn
 | GitHub
 | Portfolio
