# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the node environment to be production
ENV NODE_ENV=production

# Set the working directory to /frontend
WORKDIR /frontend

# Copy the package.json and package-lock.json files into the container
COPY package*.json ./

# Clear npm cache
# RUN npm cache clean --force

# Remove node_modules and package-lock.json
RUN rm -rf node_modules
RUN rm -f package-lock.json

# Install dependencies
# RUN npm install -g npm@latest
# RUN npm install -g npm@9.8.0
RUN npm install --legacy-peer-deps

# Copy the rest of the application code into the container
COPY . .

# Build the application
# RUN npm run build

# Set labels
LABEL Name="Avin Mathew <avin@techversantinfo.com>"
LABEL version="1.0"

# Expose port 3000 to the outside world
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
