# Meet-Code

## Table of Contents

- [Meet-Code Application Readme](#meet-code-application-readme)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Configuration](#configuration)
  - [Usage](#usage)
  - [Contributing](#contributing)

## Introduction

Welcome to Meet-Code, a coding platform that allows users to solve coding problems and test their code against a built-in code judge. Similar to LeetCode, Meet-Code provides a platform for practicing coding challenges, sharpening your problem-solving skills, and improving your coding abilities. This readme file provides essential information about the application, its features, technologies used, and how to get started with it.

## Features

Meet-Code comes with a range of features that make it a powerful coding practice platform:

- **Coding Challenges**: Users can access a library of coding problems and challenges.

- **Code Judge**: A code judge built in Express and TypeScript allows users to test their code to determine if it produces the correct results.

- **User Authentication**: Utilizes Next-Auth for secure user authentication.

- **State Management**: Recoil is used for efficient state management.

- **Database**: Prisma ORM connects the application to a PostgreSQL database for storing user data and coding challenges.

- **Validation**: Zod is employed for data validation, ensuring data consistency and security.

- **Scalability**: The code judge is deployed on Kubernetes, enabling auto-scaling and auto-healing to handle increasing user loads.

## Technologies Used

Meet-Code is built using the following technologies:

- [Next.js](https://nextjs.org/): A popular React framework for building server-rendered web applications.

- [Express.js](https://expressjs.com/): A Node.js web application framework used for building the code judge.

- [TypeScript](https://www.typescriptlang.org/): A statically typed superset of JavaScript, enhancing code quality and maintainability.

- [Prisma](https://prisma.io/): An ORM (Object-Relational Mapping) for connecting the application to a PostgreSQL database.

- [Zod](https://github.com/colinhacks/zod): A runtime type checking library for data validation.

- [Recoil](https://recoiljs.org/): A state management library for React applications.

- [Next-Auth](https://next-auth.js.org/): An authentication library for Next.js applications.

- [Kubernetes](https://kubernetes.io/): A container orchestration platform for deploying and scaling the code judge.

## Getting Started

### Prerequisites

Before running Meet-Code locally, make sure you have the following prerequisites installed on your system:

- [Node.js](https://nodejs.org/): JavaScript runtime.

- [Docker](https://www.docker.com/): Used for running PostgreSQL (for local development).

- [Kubernetes](https://kubernetes.io/): Required for deploying the code judge in a production environment.

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/tarunclub/meet-code.git
   ```

2. Install dependencies for both the main app and the code judge:

   ```
   cd client
   npm install

   cd code-judge
   npm install
   ```

## Configuration

Before running the application, you need to configure it by providing the necessary environment variables. Create a .env file in both the main-app and code-judge directories and fill in the required values.

    cp .env.example .env

## Usage

To run the Meet-Code application locally, follow these steps:

- start the client

  ```
  cd client
  npm run dev

  ```

- start the code judge

  ```
  cd code-judge
  npm run build
  npm run start
  ```

- You can access the client at http:localhost:3000 and code-judge at http://localhost:8000

## Contributing

We welcome contributions to Meet-Code! Feel free to submit bug reports, feature requests, or pull requests
