# =================================================================
# STAGE 1: Build - A "fábrica" que compila nosso código Angular
# =================================================================
# Usamos uma imagem oficial do Node.js (versão 20, Alpine para ser leve)
FROM node:20-alpine AS builder

# Define o diretório de trabalho
WORKDIR /app

# Copia o package.json e o package-lock.json primeiro para aproveitar o cache
COPY package*.json ./

# Instala todas as dependências do projeto
RUN npm install

# Copia todo o resto do código fonte
COPY . .

# Constrói a aplicação Angular para produção.
# O resultado será colocado na pasta /app/dist/book-catalog-frontend/browser
RUN npm run build


# =================================================================
# STAGE 2: Serve - O servidor web que entrega nosso app
# =================================================================
# Usamos uma imagem super leve do Nginx
FROM nginx:1.25-alpine

# Remove a configuração padrão do Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copia nosso arquivo de configuração personalizado para o Nginx (vamos criá-lo a seguir)
COPY nginx.conf /etc/nginx/conf.d

# Copia os arquivos da aplicação Angular (que foram gerados no estágio 'builder')
# para a pasta onde o Nginx serve os arquivos HTML
COPY --from=builder /app/dist/book-catalog-frontend/browser /usr/share/nginx/html

# Expõe a porta 80, que é a porta padrão do Nginx
EXPOSE 80
