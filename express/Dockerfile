FROM node:16.16

ADD package.json /tmp/package.json

ADD package-lock.json /tmp/package-lock.json

RUN rm -rf build

RUN cd /tmp && npm install

ADD ./ /src

RUN rm -rf /src/node_modules && cp -a /tmp/node_modules /src/

WORKDIR /src

RUN npm run build

ENV NODE_ENV=production

CMD ["node", "build/app.js"]