# Votify Setup Instructions
Follow these steps to set up the Votify project locally on your machine.

## Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

## Directory Structure
Ensure your project directory structure looks like this:

```
Votify/
votify/
├── frontend/
│   ├── styles/
│   │   ├── navbar.css
│   │   ├── sidebar.css
│   │   ├── main.css
│   │   ├── footer.css
│   │   └── theme.css
│   ├── assets/
│   │   ├── create-poll.png
│   │   └── join-poll.png
│   ├── home.html
│   ├── navbar.html
│   ├── sidebar.html
│   └── footer.html
├── backend/
│    └── server.js
├── .gitignore  
├── package.json  
```

## Steps to Set Up

1. **Fork the Repository: Click on the "Fork" button at the top right corner of the repository page.**

2. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd votify
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

4. **Start the Server**

   ```bash
   npm start
   ```

   The server will start running on `http://localhost:3000`.

5. **Open the Application**

   Open your web browser and navigate to `http://localhost:3000` to see the Votify application in action.

## Troubleshooting

- **404 Errors for Assets**: Ensure that the directory structure is correct and all files are in their respective directories.
- **Dark Mode Toggle Not Working**: Make sure the `script.js` file is correctly loaded and the dark mode toggle elements have the correct IDs (`toggle-dark-mode` and `toggle-dark-mode-sidebar`).

## Additional Notes

- Ensure that the images `create-poll.png` and `join-poll.png` are placed in the `frontend/assets` directory.
- If you make any changes to the server or frontend files, restart the server to see the changes.

Happy coding!