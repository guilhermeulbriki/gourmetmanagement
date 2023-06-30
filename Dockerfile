# Use uma imagem base do Node.js
FROM node:alpine

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo package.json e o arquivo package-lock.json (se existir)
COPY package*.json ./

# Execute o comando npm install para instalar as dependências
RUN yarn

# Copie todo o código-fonte para o diretório de trabalho
COPY . .

# Exponha a porta 3000 para acesso externo
EXPOSE 3000

# Inicie o aplicativo ReactJS
CMD ["yarn", "start"]
