# Use Node.js official image as the base image
FROM node:23-slim

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app files
COPY . .

# Expose the app port
EXPOSE 3000

# Command to start the app
CMD [ "node", "app.js" ]
