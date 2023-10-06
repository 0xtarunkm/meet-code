# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose a port if needed (e.g., for a REST API)
# EXPOSE 8080

# Define the command to run when the container starts
CMD ["npm", "start"]
