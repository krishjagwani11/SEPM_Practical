# Dockerfile
# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY backend/package*.json ./

# Install backend dependencies
RUN npm install express

# Copy frontend files to the working directory
COPY frontend/ ./frontend/

# Build frontend
RUN cd frontend && npm install && npm run build

# Copy backend files to the working directory
COPY backend/ ./backend/

# Expose the port the app runs on
EXPOSE 3000

# Command to run the backend server
CMD ["node", "backend/server.js"]
