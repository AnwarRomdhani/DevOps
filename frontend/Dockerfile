# Use the official Node.js LTS Alpine image as a base
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available) into the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the frontend application files into the container
COPY . .

# Build the React app
RUN npm run build

# Install a lightweight HTTP server to serve the build files
RUN npm install -g serve

# Expose port 3000 for serving the React app
EXPOSE 3000

# Serve the build directory using the `serve` command
CMD ["serve", "-s", "build", "-l", "3000"]
