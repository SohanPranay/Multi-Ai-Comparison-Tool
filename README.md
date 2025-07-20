# Multi-Ai-Comparison-Tool
A full-stack web application that sends a user's prompt to multiple large language models (LLMs) and displays their responses side-by-side for real-time comparison. This tool allows for an efficient evaluation of AI model performance, tone, and style from a single interface.

## Working process
The application operates with a simple, and robust data flow:

1.  **User Input**: The user enters a prompt into the frontend interface and clicks "Submit".
2.  **API Request**: The frontend JavaScript captures the prompt and makes three simultaneous `POST` requests to the backend server's API endpoints.
3.  **Backend Processing**: The Node.js/Express server receives these requests.
4.  **Response Handling**: The backend securely uses an API key from a `.env` file to authenticate with Groq. Once it receives the responses from the AI models, it forwards them back to the frontend.
5.  **Display Results**: The frontend JavaScript receives the three distinct AI-generated answers and dynamically updates the HTML to display each one in its respective column.

## Key Features

-   **Simultaneous Queries**: A single prompt efficiently queries three different models at once.
-   **Side-by-Side View**: A clean, organized layout for direct comparison of AI outputs.
-   **Efficient Backend**: Built with Node.js and Express to handle asynchronous API calls concurrently using `Promise.all`.
-   **Secure API Key Management**: Utilizes a `.env` file to keep the Groq API key safe and out of version control, a critical security best practice.
-   **Dynamic UI**: The user interface provides real-time feedback, showing "Loading..." states while waiting for responses.

---

## Tech Stack & Architecture

This project uses a classic client-server architecture.

-   **Frontend (Client-Side)**:
    -   **HTML**: Structures the web page content.
    -   **CSS3**: Styles the application for a clean user experience.
    -   **Vanilla JavaScript**: Handles all user interactions, DOM manipulation, and asynchronous API calls to the backend using the `Fetch API`.

-   **Backend (Server-Side)**:
    -   **Node.js**: Provides the JavaScript runtime environment.
    -   **Express.js**: A minimal and flexible web framework used to create the API endpoints.
    -   **Axios**: A promise-based HTTP client to communicate with the external Groq API.
    -   **dotenv**: Manages environment variables for secure API key storage.

-   **AI Service**:
    -   **Groq API**: Provides high-speed access to various open-source LLMs.

---
## Getting Started

Follow these instructions to get a local copy up and running.

### Prerequisites

You must have [Node.js](https://nodejs.org/) (which includes npm) installed on your machine.

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    ```
2.  **Navigate to the backend folder:**
    ```bash
    cd your-repo-name/backend
    ```
3.  **Install NPM packages:**
    ```bash
    npm install
    ```
4.  **Create an environment file:**
    -   Create a file named `.env` in the `backend` directory.
    -   Add your Groq API key to it. This variable name must match the one in `index.js`.
        ```env
        OPENAI_API_KEY_KIMIK2=gsk_your_groq_api_key_here
        ```

### Running the Application

1.  **Start the backend server:**
    -   While in the `backend` folder, run:
        ```bash
        node index.js
        ```
    -   The server will start on `http://localhost:5000`.

2.  **Launch the frontend:**
    -   Navigate to the project's root folder in your file explorer.
    -   Open the `index.html` file in your web browser.

You can now use the application.
