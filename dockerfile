# operation system
FROM node:latest
#working directory
WORKDIR /usr/src/app
# project files move to servers main 
COPY . .

# dependencies install
RUN npm install

# port no
EXPOSE 3000

CMD ["node","./bin/www"]

