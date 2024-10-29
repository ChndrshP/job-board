# Job Board

## Project Structure

```
/Job-board
    ├── /client
    └── /server
```

## Client

The client side of the application is built using React.js with Vite for setup and Material-UI (MUI) for styling.

### Setup

1. Navigate to the client directory:
     ```sh
     cd client
     ```

2. Install dependencies:
     ```sh
     npm install
     ```

3. Start the development server:
     ```sh
     npm run dev
     ```

## Server

The server side of the application is built using Node.js with Express and uses SerpApi to fetch job listings from Google Jobs.

### Setup

1. Navigate to the server directory:
     ```sh
     cd server
     ```

2. Install dependencies:
     ```sh
     npm install
     ```

3. Start the server:
     ```sh
     npm start
     ```

## Environment Variables

Create a `.env` file in the server directory and add the following variables:

```
SERP_API_KEY=your_serp_api_key
```

Replace `your_serp_api_key` with your actual SerpApi key.

## License

This project is licensed under the MIT License.
