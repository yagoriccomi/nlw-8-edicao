FROM node:16 AS Menu_Feedback

ENV PORT=3000

WORKDIR /app

USER root

COPY . .

RUN npm install

# COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]
