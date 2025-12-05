# How to Deploy Face Detection App to Render

This guide will help you deploy your **Face Detection App** (Frontend + Backend) to Render as a single Web Service.

## Prerequisites

1.  Ensure your code is pushed to **GitHub**.
2.  You have an account on [Render.com](https://render.com/).

## Step 1: Create a New Web Service

1.  Log in to your Render Dashboard.
2.  Click on the **"New +"** button and select **"Web Service"**.
3.  Connect your GitHub account if you haven't already.
4.  Search for your repository (`Face-Detection`) and click **"Connect"**.

## Step 2: Configure the Service

Fill in the details as follows:

*   **Name**: Choose a name (e.g., `face-detection-app`).
*   **Region**: Select the one closest to you (e.g., Singapore or Frankfurt).
*   **Branch**: `main` (or your default branch).
*   **Root Directory**: Leave empty.
*   **Runtime**: **Node**
*   **Build Command**: `npm install && npm run build`
    *   *This installs dependencies for both folders and builds the React frontend.*
*   **Start Command**: `npm start`
    *   *This starts the Express server from the backend folder.*

## Step 3: Environment Variables

You need to add your environment variables so the app works correctly in production.

1.  Scroll down to the **"Environment Variables"** section.
2.  Click **"Add Environment Variable"**.
3.  Add the following keys and values (copy them from your local `.env` file):

    *   **Key**: `REACT_APP_EMAILJS_SERVICE_ID`
        *   **Value**: `service_31sk105`
    *   **Key**: `REACT_APP_EMAILJS_TEMPLATE_ID`
        *   **Value**: `template_avhsmch`
    *   **Key**: `REACT_APP_EMAILJS_PUBLIC_KEY`
        *   **Value**: `ZAVoNKdGhM48XX37z`

    *(Note: You do not need to add `PORT` as Render sets it automatically.)*

## Step 4: Deploy

1.  Click **"Create Web Service"**.
2.  Render will start building your app. You can watch the logs.
3.  Once the build finishes, you will see a green **"Live"** badge.
4.  Click the URL provided (e.g., `https://face-detection-app.onrender.com`) to view your live app!

## Troubleshooting

*   **Build Failed?** Check the logs. Ensure `npm run build` works locally.
*   **Models Not Loading?** Ensure the `models` folder is inside `public/` in your repository.
*   **Uploads Not Working?** Note that Render's free tier filesystem is **ephemeral**. This means uploaded images will disappear when the server restarts (which happens frequently on free tier). For permanent storage, you would need to use a service like AWS S3 or Cloudinary, but for a demo, this setup is fine.
