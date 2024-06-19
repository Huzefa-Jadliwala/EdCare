# EdCare Chemnitz

EdCare Chemnitz is a comprehensive data management and visualization system for educational and social services. It integrates data from multiple sources, represented in CSV files, into a MongoDB database and provides a robust API to manage and access this data. The platform features user authentication, data importation, and dynamic visualization using mapping technologies.

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
- **Mapping**: Leaflet.js

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

Follow these steps to set up and run the EdCare application:

### 1. Clone the Repository

First, clone the repository from GitHub:

```bash
git clone https://github.com/Huzefa-Jadliwala/EdCare.git
cd EdCare
```

### 2. Download Data Files

Download the data files and store them in the `Data` directory:

- **Schools (Grundschule, Oberschule, Förderschule, Gymnasium, Berufsbildende Schule, …)**: [Download here](https://portal-chemnitz.opendata.arcgis.com/datasets/chemnitz::schulen/about)
- **Kindergarten (Kindertageseinrichtungen)**: [Download here](https://portal-chemnitz.opendata.arcgis.com/datasets/chemnitz::kindertageseinrichtungen/about)
- **Social Child Projects (Schulsozialarbeit)**: [Download here](https://portal-chemnitz.opendata.arcgis.com/datasets/chemnitz::schulsozialarbeit/about)
- **Social Teenager Projects (Jugendberufshilfe)**: [Download here](https://portal-chemnitz.opendata.arcgis.com/datasets/chemnitz::jugendberufshilfen/about)

Store these files in the `Data` directory.

### 3. Install Backend Dependencies

Navigate to the `api` directory and install the necessary dependencies:

```bash
cd api
npm install
```

### 4. Install Frontend Dependencies

Navigate to the `edcare-frontend` directory and install the necessary dependencies:

```bash
cd ../edcare-frontend
npm install
```

### 5. Install Python Dependencies

Navigate to the `Data` directory and install the necessary Python libraries:

```bash
cd ../Data
pip install pymongo pandas python-dotenv
```

## Configuration

### Backend Configuration

Create a `.env` file in the `api` directory with the following environment variables:

```env
Mongo="mongodb+srv://huzijadli:Q3wbNfqxz8hCa2Gj@cluster0.jmwo6kk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
JWT_SECRET="dvsdcsdvwe323e2dw2312wsq"
```

### Frontend Configuration

Create a `.env` file in the `edcare-frontend` directory with the following environment variables:

```env
VITE_FIREBASE_API_KEY="AIzaSyDvZ1miVZb8dAfJsgkdd5xhkgnn2s_0dBI"
```

## Running the Application

### 1. Load Data into MongoDB

Navigate to the `Data` directory and run the `load_data.py` script to load all the data into the database:

```bash
cd ../Data
python load_data.py
```

### 2. Start the Backend Server

Navigate to the `api` directory and start the backend server:

```bash
cd ../
npm start
```

### 3. Start the Frontend Server

Navigate to the `edcare-frontend` directory and start the frontend server:

```bash
cd ../edcare-frontend
npm start
```

## Access the Application

Open your web browser and go to (https://apidog.com/apidoc/shared-9b63d092-7b2b-4af2-a6fd-eef37dda334a).

## API Documentation

- The API documentation is generated using APIDOG and can be accessed at `http://localhost:5000/api-docs`.

## Contributing

We welcome contributions from the community. Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
