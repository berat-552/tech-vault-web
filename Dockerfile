FROM node:19

WORKDIR /app

# Copy the package.json (and package-lock.json, if available) file into the container
COPY package.json .

# Install dependencies
RUN npm i

# Copy the rest of your project's files into the container
COPY . .

EXPOSE 5173

# Run development server
CMD ["npm", "run", "dev"]