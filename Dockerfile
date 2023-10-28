# Use uma imagem base do Node.js
FROM node:latest

# Crie o diretório de trabalho dentro do contêiner
WORKDIR /appjs

# Copie os arquivos necessários para o contêiner (package.json e package-lock.json)
COPY ./ .

# Instale as dependências
RUN npm install

# Expõe a porta que o aplicativo usa (se necessário)
EXPOSE 3000

# Comando para iniciar o aplicativo (ajuste conforme necessário)
CMD ["npm", "start"]
