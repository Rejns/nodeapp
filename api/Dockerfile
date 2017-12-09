FROM node:carbon

# Create app directory
WORKDIR /usr/src/nodeapp

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
ADD package.json /usr/src/nodeapp/package.json

RUN npm install

# Bundle app source
COPY ./server.js /usr/src/nodeapp/

CMD [ "npm", "start" ]