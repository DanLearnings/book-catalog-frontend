# Book Catalog Frontend

This repository contains the source code for the frontend web application of the Book Catalog project. It is built with Angular.

For a complete architectural overview of the entire ecosystem, please see the main project repository:
**[➡️ View Main Project Hub: `book-catalog`](https://github.com/DanLearnings/book-catalog)**

---

## 🚀 Development Setup

This guide explains how to run the frontend locally for development and testing purposes.

### Prerequisites

-   Node.js (v20 or higher)
-   Angular CLI
-   Docker Desktop (to run the backend dependencies)

### How to Run

1.  **Start the backend dependencies (Database & API):**
    For the frontend to work, it needs the backend API to be running. The easiest way to start both is by using the project's Docker Compose setup.
    *   Clone the `book-catalog-orchestration` repository.
    *   Run `docker-compose up -d` inside it.
    *   This will start the API on `http://localhost:8080`.

2.  **Install frontend dependencies:**
    ```bash
    npm install
    ```

3.  **Run the Angular development server:**
    ```bash
    ng serve
    ```
    The application will be available at `http://localhost:4200`.

### Building the Project

-   **To build the application for production:**
    ```bash
    npm run build
    ```
-   **To build the Docker image locally:**
    ```bash
    docker build -t book-catalog-frontend:local .
    ```

### CI Pipeline

A CI pipeline is configured in this repository using GitHub Actions. Every push to the `main` branch will automatically build and publish a new Docker image to the GitHub Container Registry.
