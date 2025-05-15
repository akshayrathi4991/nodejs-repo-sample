# Use an official Node.js runtime as a base image
FROM node:22.1.0

# Create and set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if exists) first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code
COPY . .

# Expose the app's port (e.g., 3000)
EXPOSE 3000

# Command to run the app (adjust if your entry file is different)
CMD ["node", "src/index.js"]
