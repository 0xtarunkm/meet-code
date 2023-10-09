# Stage 1: Build TypeScript Application
FROM node:alpine3.18 AS build

# Set the working directory in the container
WORKDIR /app    

# Copy package.json and package-lock.json to the working directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the TypeScript source code to the container
COPY . .

# Build TypeScript code to JavaScript
RUN yarn build

# Stage 2: Create distroless Image
FROM node:alpine3.18

# Set the working directory in the final container
WORKDIR /app

# Copy the built JavaScript files from the build stage
COPY --from=build /app/build ./build
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/yarn.lock ./yarn.lock

# Expose the port your application will run on 
EXPOSE 8000

# Start your Node.js application
CMD ["node","build/index.js"]
