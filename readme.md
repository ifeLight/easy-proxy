## Easy Proxy - Simple Node.js Proxy Server

This repository provides a lightweight Node.js application that acts as a simple proxy server. It allows you to forward requests from your client to a target server, providing features like request logging and debug mode.

### Features

- Forwards requests to a specified target server.
- Optionally allows insecure SSL connections.
- Logs requests and responses for debugging purposes (configurable).

### Installation

1. Clone this repository:

```bash
git clone [https://github.com/ifeLight/easy-proxy.git](https://github.com/ifeLight/easy-proxy.git)
```

2. Install dependencies:

```bash
npm install
```

2. Copy the `.env.example` file to `.env` and configure the settings:

```bash
cp .env.example .env
```

3. Start the proxy server:

```bash
npm start
```

### Configuration

The proxy server can be configured using environment variables. The following variables are available:

- `TARGET`: The target server URL to forward requests to. A valid URL is required.
- `PORT`: The port number to listen for incoming requests (default: `8080`).
- `ALLOW_INSECURE`: Allow insecure SSL connections (default: `false`).
- `DEBUG`: Log incoming requests (default: `true`).

### Usage

To use the proxy server, simply configure your client to send requests to the proxy server instead of the target server. The proxy server will forward the requests to the target server and return the responses to the client.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
