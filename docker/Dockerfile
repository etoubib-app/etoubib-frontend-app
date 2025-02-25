# # build the anguular app
# FROM node:20-alpine as build

# WORKDIR /app
# COPY package*.json .
# RUN npm ci
# COPY . .
# RUN npm run build

# # serve the angular app with nginx
# FROM nginx:1.23-alpine
# WORKDIR /usr/share/nginx/html
# RUN rm -rf *

# #copy the built angular app from the build stage
# COPY --from=build /app/dist/demo-angular-app/browser .
# EXPOSE 80
# ENTRYPOINT [ "nginx", "-g", "daemon off;" ]

# Stage 1: Build the application
FROM node:20-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration production 

# Stage 2: Copy static files (optional, for local testing)
FROM alpine:latest
WORKDIR /app
COPY --from=builder /app/dist/etoubib ./  
CMD ["echo", "Static files are ready for deployment to S3"]