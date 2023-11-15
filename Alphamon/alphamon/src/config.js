const serverUrl = process.env.REACT_APP_SERVER_URL;
const loginEndpoint = process.env.REACT_APP_ENDPOINT_LOGIN;
const joinEndpoint = process.env.REACT_APP_ENDPOINT_JOIN;
const sendEndpoint = process.env.REACT_APP_ENDPOINT_CHAT_SEND;
const communitypostEndpoint = process.env.REACT_APP_ENDPOINT_COMMUNITYPOST;
const communitypostIDEndpoint = process.env.REACT_APP_ENDPOINT_COMMUNITYPOSTID;
const boardEndpoint = process.env.REACT_APP_ENDPOINT_BOARD;
const commentpostEndpoint = process.env.REACT_APP_ENDPOINT_COMMENTPOST;
const nicknamecheckEndpoint = process.env.REACT_APP_ENDPOINT_NICKNAME_CHECK;
const chatclearEndpoint = process.env.REACT_APP_ENDPOINT_CHAT_CLEAR;
const predictpriceEndpoint = process.env.REACT_APP_ENDPOINT_PREDICT_PRICE;
const predictportfolioEndpoint = process.env.REACT_APP_ENDPOINT_PREDICT_PORTOFOLIO;
const predictmarketEndpoint = process.env.REACT_APP_ENDPOINT_PREDICT_MARKET;
const newsEndpoint = process.env.REACT_APP_ENDPOINT_NEWS;
const tendencyEndpoint = process.env.REACT_APP_ENDPOINT_TENDENCY;


module.exports = {
  serverUrl,
  loginEndpoint,
  joinEndpoint, 
  sendEndpoint,
  communitypostEndpoint,
  communitypostIDEndpoint,
  boardEndpoint,
  commentpostEndpoint,
  nicknamecheckEndpoint,
  chatclearEndpoint,
  predictpriceEndpoint,
  predictportfolioEndpoint,
  predictmarketEndpoint,
  newsEndpoint,
  tendencyEndpoint,
};