# Hospital-API

  Hospital-API is backend REST API design for the doctors of a Hospital which has been allocated by the
govt for testing and quarantine + well being of COVID-19 patients created for registering doctors and patients,signin in  for doctors and creating report of patients



## Features

    - There can be 2 types of Users
    - Doctors
    - Patients
    - Doctors can log in
    - Each time a patient visits, the doctor will follow 2 steps
    - Register the patient in the app (using phone number, if the patient already exists, just
    return the patient info in the API)
    - After the checkup, create a Report
    - Patient Report will have the following fields
    - Created by doctor
    - Status (You can use enums if you want to):
    - Can be either of: [Negative, Travelled-Quarantine, Symptoms-Quarantine,
    Positive-Admit]
    
     Routes Implimented
    - /api/v1/doctors/register → with username and password
    - /api/v1/doctors/login → returns the JWT to be used
    - /api/v1/patients/register
    - /api/v1/patients/:id/create_report
    - /api/v1/patients/:id/all_reports → List all the reports of a patient oldest to latest
    - /api/v1/reports/:status → List all the reports of all the patients filtered by a specific status


  ## Folder Structure

The folder structure of this application is as follows:

```
├── controllers
├── ├──api
├── ├──├──v1
│   ├──├──  └── doctorController.js  
│   ├──├──  └── patientController.js  
│   ├──├──  └── reportController.js   
├── config
│   └── mongoose.js
│   └── passport-jwt.js
├── models
│   └──doctorSchema.js
│   └──patientSchema.js
│   └──reportSchema.js
├── routes
├── ├──api
├── ├──├──v1
│   ├──├──  └── doctorsRoutes.js
│   ├──├──  └── index.js
│   ├──├──  └──reportsRoutes.js
│   ├──├──  └──patientsRoutes.js
│   ├──  └──index.js
│   └──index.js
├── .env
├── .gitignore
├── package.json
├── README.md
└── index.js
```

- `controllers`: Contains the logic for handling HTTP requests and responses.
- `models`: Contains the data models and schemas for interacting with databases or other data sources.
- `routes`: Defines the application routes and maps them to the corresponding controller methods.
- `index.js`: The main application file where the Express app is created and configured.
- `.env.example`: An example file for environment variables. Rename it to `.env` and provide your own values.
- `.gitignore`: Specifies files and directories that should be ignored by version control.
- `package.json`: Contains metadata and dependencies for the Node.js application.
- `README.md`: This file, providing information about the application.



## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)


## Getting Started
  


### Prerequisites
- Node.js (v14 or higher)
- NPM (or Yarn)

### Installation
```bash
git clone https://github.com/KUSHAL-JAIN-au9/ERS-CN.git
cd Hospital-API
npm install
# or
yarn install
```

### Configuration
Example:

Create a `.env` file in the root directory and set the required environment variables:

```
MONGO_URI = "your mongo url"
PORT = 8000
SECRET = "your secret key"
```

## Usage


```bash
npm start
# or
yarn start
```




