# Next.js App with Google OAuth

This is a simple Next.js application that implements Google OAuth for authentication. Follow the instructions below to set up and run the app.
<img width="1440" alt="image" src="https://github.com/user-attachments/assets/51f5d2b8-0be1-4037-a80a-46dde09abe6e">

## Prerequisites

- Node.js (version 14.x or higher)
- npm or yarn

## Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   Install Dependencies
   ```

Navigate to the project directory and install the required dependencies.

bash
Copy code
npm install

2. **Create a .env.local file in the root of your project and add the following environment variables:**

env
Copy code
NEXT_PUBLIC_API_BASE_URL=https://reqres.in/api
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_KEY=
NEXT_PUBLIC_AUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=bb0f32bc75293be24a0a7f77ecc6844d8038298b5903fe5bf67e69d3cbb55273
Ensure that you replace the values of GOOGLE_CLIENT_ID and GOOGLE_CLIENT_KEY with your actual Google OAuth credentials.

3. **Run the Application**

Start the development server:

bash
Copy code
npm run dev

3. **Set Up Google OAuth Credentials**

Go to the Google Developers Console.
Create a new project.
Navigate to "Credentials" and click "Create Credentials".
Select "OAuth 2.0 Client IDs".
Configure the consent screen with the necessary details.
Add http://localhost:3000/api/auth/callback/google to the "Authorized redirect URIs".
Copy your CLIENT ID and CLIENT SECRET and replace the corresponding values in your .env.local file.
Test the Application

Open your browser and navigate to http://localhost:3000. You should see the application running with Google OAuth authentication. Click the login button to authenticate using your Google account.
