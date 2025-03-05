# Real Estate Web Application

#### Home
![Reactjs Creative Real-EState Website](https://github.com/Abhishek99M/Real-EState/blob/main/frontend/src/assets/Add-Property.png)

#### Listing
![Reactjs Creative Real-EState Website Listing Page](https://github.com/Abhishek99M/Real-EState/blob/main/frontend/src/assets/Home.png)

#### Add-Property
![Reactjs Creative Real-EState Website Add-Property Page](https://github.com/Abhishek99M/Real-EState/blob/main/frontend/src/assets/Listing.png)


## Overview

This is a **dynamic and responsive** Real Estate platform designed to provide users with an intuitive and interactive experience for browsing, listing, and managing properties. The application features modern UI/UX, and seamless navigation to enhance user engagement.

## Features

- **Property Listings:** Users can explore a wide range of property listings with images, descriptions, and pricing details.
  
- **Add-Property:** Users can add their properties to the listings with detailed information and images.

- **Interactive UI:** A user-friendly interface with smooth animations and a responsive design.

- **Search & Filters:** Advanced search and filtering options based on location, price, and property type.

- **User Authentication:** Secure login and signup functionality with JWT-based authentication.

- **Favorites & Bookings:** Users can like and book properties, which are stored in the database.

- **Admin Dashboard:** Property owners and admins can manage listings, add new properties, and update details.

- **Real-time Updates:** Property availability and changes are updated in real-time.

## Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Auth0 / Firebase Authentication
- **Deployment:** Vercel 

## Installation & Setup

1. **Clone the Repository:**
   ```
   git clone https://github.com/abhishek99M/Real-Estate.git
   cd Real-Estate
   ```
2. **Install Dependencies:**
   ```
   npm install
   ```
3. **Set Up Environment Variables:**
   Create a `.env` file and configure the necessary API keys (MongoDB, Auth0, etc.).
   ```env
   MONGO_URI=your_mongodb_connection_string
   AUTH0_CLIENT_ID=your_auth0_client_id
   AUTH0_CLIENT_SECRET=your_auth0_client_secret
   ```
4. **Run the Development Server:**
   ```
   npm run dev
   ```
5. **Build for Production:**
   ```
   npm run build
   ```

## Deployment

- **Frontend:** Deploy on Vercel / Netlify
- **Backend:** Deploy on Render / Heroku
- **Database:** Hosted on MongoDB Atlas

## Contribution

1. Fork the repository
2. Create a new branch (`feature/new-feature`)
3. Commit your changes (`git commit -m "Added a new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request
