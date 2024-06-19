# Edcare Chemnitz

Edcare Chemnitz is a comprehensive data management and visualization system for educational and social services. It integrates data from multiple sources, represented in CSV files, into a MongoDB database and provides a robust API to manage and access this data. The platform features user authentication, data importation, and dynamic visualization using mapping technologies.

## Table of Contents
1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [System Requirements](#system-requirements)
4. [Installation](#installation)
5. [Configuration](#configuration)
6. [Running the Application](#running-the-application)
7. [API Documentation](#api-documentation)
8. [Contributing](#contributing)
9. [License](#license)

## Features
- User authentication (email and Google sign-in)
- Automated data import from CSV files
- Interactive map visualization
- Comprehensive API documentation with APIDOG
- Secure JWT-based authentication
- CRUD operations on MongoDB collections

## Tech Stack
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT, bcrypt
- **API Documentation**: APIDOG
- **Mapping**: Leaflet.js, Mapbox

## System Requirements
### Hardware Requirements
- Processor: Intel Core i5 or higher (or equivalent AMD)
- Memory: 4 GB RAM minimum
- Storage: 20 GB available SSD space
- Display: 1080p resolution or higher

### Software Requirements
- Operating System: Windows 10, macOS 10.15, or Linux (Ubuntu 20.04 LTS)
- Node.js: Version 14.x
- npm (Node Package Manager): Version 6.x
- MongoDB: Version 4.4
- IDE: Visual Studio Code or IntelliJ IDEA

### Network Requirements
- Bandwidth: High-speed internet connection
- Latency: Low-latency network connection for fast response times

## Installation
1. **Clone the Repository**:
    ```bash
    git clone https://github.com/yourusername/edcare-chemnitz.git
    cd edcare-chemnitz
    ```

2. **Install Backend Dependencies**:
    ```bash
    cd backend
    npm install
    ```

3. **Install Frontend Dependencies**:
    ```bash
    cd ../frontend
    npm install
    ```

## Configuration
1. **Backend Configuration**:
    - Create a `.env` file in the `backend` directory with the following environment variables:
        ```env
        MONGO_URI=your_mongodb_connection_string
        JWT_SECRET=your_jwt_secret
        GOOGLE_CLIENT_ID=your_google_client_id
        GOOGLE_CLIENT_SECRET=your_google_client_secret
        ```

2. **Frontend Configuration**:
    - Create a `.env` file in the `frontend` directory with the following environment variables:
        ```env
        REACT_APP_API_URL=http://localhost:5000/api
        REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
        ```

## Running the Application
1. **Start the Backend Server**:
    ```bash
    cd backend
    npm start
    ```

2. **Start the Frontend Server**:
    ```bash
    cd ../frontend
    npm start
    ```

3. **Access the Application**:
    - Open your web browser and go to `http://localhost:3000`.

## API Documentation
- The API documentation is generated using APIDOG and can be accessed at `http://localhost:5000/api-docs`.

## Contributing
We welcome contributions from the community. Please fork the repository and submit a pull request with your changes.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
