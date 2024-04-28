# Tech Vault Web

The **Tech-Vault Web** is a web application designed to help aspiring tech enthusiasts practice and prepare for technical interviews. Leveraging the core functionality of the **[Tech Vault CLI](https://github.com/moabukar/tech-vault-cli)**, this web application provides users with random technical interview questions sourced from the **[Tech Vault](https://github.com/moabukar/tech-vault)**.

### Prerequisites

- NodeJS installed on your machine (preferably the LTS version)
- **npm** (Node Package Manager)

### Instructions

#### Running locally

1. Clone the repository:
   `git clone https://github.com/Deengineers/tech-vault-web`
   <br>
   <br>
2. Navigate to the project directory:
   `cd tech-vault-web`
   <br>
    <br>
3. Install dependencies:
   `npm install`
   <br>
    <br>
4. Start the development environment with npm:
   `npm run dev`
   <br>
   <br>
5. This command starts the development server. By default, the web application will be available at http://localhost:5174/

#### Using Docker

1. Clone the repository:
   `git clone https://github.com/Deengineers/tech-vault-web`
   <br>
   <br>
2. Navigate to the project directory:
   `cd tech-vault-web`
   <br>
   <br>
3. Build your Docker image:
   `docker build -t tech-vault-web .`
   <br>
   <br>
4. Once the image is built, run the container, optionally add the `-d` flag to detach the container from the terminal:
   `docker run -d -p 5173:5173 tech-vault-web`
   <br>
   <br>
5. Now your application should be running, and you can access it by navigating to http://localhost:5173 in your web browser.
   <br>
   <br>
Some optional flags:

- `-d` - To run the container in the background (Detach Mode)
- `--rm` - To delete the container, when you stop the container
