const serverUrl = process.env.REACT_APP_SERVER_URL;
const loginEndpoint = process.env.REACT_APP_ENDPOINT_LOGIN;
const joinEndpoint = process.env.REACT_APP_ENDPOINT_JOIN;
const sendEndpoint = process.env.REACT_APP_ENDPOINT_CHAT_SEND;
const communitypostEndpoint = process.env.REACT_APP_ENDPOINT_COMMUNITYPOST;
const communitypostIDEndpoint = process.env.REACT_APP_ENDPOINT_COMMUNITYPOSTID;
const boardEndpoint = process.env.REACT_APP_ENDPOINT_BOARD

module.exports = {
  serverUrl,
  loginEndpoint,
  joinEndpoint, 
  sendEndpoint,
  communitypostEndpoint,
  communitypostIDEndpoint,
  boardEndpoint,
};