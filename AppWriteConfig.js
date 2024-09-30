// appwrite-config.js
const { Client } = Appwrite;

const client = new Client();
client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('64b1f8fe77b86539c325');

export default client;
