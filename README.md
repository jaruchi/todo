# Setup

    Install latest version of node
    npm install
    npm start
    This will launch a server locally at port 7439, so you can access this work via http://localhost:7439 or http://127.0.0.2:7439

#https
We used https://web.dev/how-to-use-local-https/#using-mkcert:-cheatsheet to generate cert for localhost on windows.

- install choco
- Run Powershell as Administrator
- Run following command
  ` Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1')) `
- Check if choclatory is installed
  ` choco -?`
- Install mkcert
  ` choco install mkcert`
- Install cert store
  ` mkcert -install`
- Generate localhost cert
  `mkdir -p c:\valut\security`
  `cd C:\vault\security`
  ` mkcert localhost`
- Run http-server with cert
    ` http-server -c-1 --cord -p 7439 -S -C   security\localhost.pem -K  security\localhost-key.pem --cors`