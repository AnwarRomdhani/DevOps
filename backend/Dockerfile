# Use the official Node.js LTS Alpine image as a base
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available) into the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files into the container
COPY . .

# Expose port 9000 (the port your server will listen on)
EXPOSE 9000

# Set environment variable for MongoDB connection (Mongo URI)
# You can override this with the value in Docker Compose or from the environment
ENV MONGO_URI=mongodb://mongo:27017/mydatabase

# Start the application
CMD ["npm", "start"]
