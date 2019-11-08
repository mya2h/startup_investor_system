# Install Node.js
FROM node:10.16.0 As builder

# set working directory
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app
RUN npm install
RUN npm install -g @angular/cli@6.10.2

copy . /app

# generate build
RUN ng build --output-path=dist

# Install Node Packages and Build
# RUN npm install && npm run build


# Install Nginx
FROM nginx:alpine

# Copy Nginx Configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist/* /usr/share/nginx/html/

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
