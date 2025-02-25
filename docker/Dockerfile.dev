# Use the official Node image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Install Angular CLI globally (if not already installed)
RUN npm install -g @angular/cli

# Copy the rest of the application code
COPY . .

# Expose the default Angular port
EXPOSE 4200

# Run the Angular development server with live reloading
CMD ["ng", "serve", "--host", "0.0.0.0"]