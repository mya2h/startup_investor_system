# Install Node.js
FROM node:alpine As builder

# Copy Source Code
COPY . /app

# set working directory
WORKDIR /app

# Install Node Packages and Build
RUN npm install && npm run build

# Install Nginx
FROM nginx:alpine

# Copy Ngin Configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist/* /usr/share/nginx/html/