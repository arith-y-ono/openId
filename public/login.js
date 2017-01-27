var crypto = require("crypto");
var url = require("url");


var salt = 'hogehoge';
  var hash = crypto.createHash('sha256');
  hash.update(salt + Math.random() + Date())
  var stateToken = hash.digest('hex');
  console.log(stateToken);


  var authUrl = 'https://accounts.google.com/o/oauth2/v2/auth?'
    + 'response_type=code'
    + '&client_id=594466738208-kbma14k39tqclcnuid0ou8pah009v0vo.apps.googleusercontent.com'
    + '&redirect_uri=http://localhost:5000/oauth2callback=1'
    + '&scope=profile%20email'
    + '&state=' + stateToken;

    //リダイレクト処理
    req.redirect("authUrl");

    var params = url.parse(req.url, true);
    var code = params.query.code;
    var state = params.query.state;

    if (state !== session.stateToken) {
      // 認証に失敗。エラーを返すコードを書く
    }


    var oauth2 = new oauth.OAuth2(
    '594466738208-kbma14k39tqclcnuid0ou8pah009v0vo.apps.googleusercontent.com', //cliendId
   '0lJNwx_ruDS6ceBhasn-o884', //clientSecret
   'https://accounts.google.com/o/', //baseSite
   null, //authorizePath
   'oauth2/token', //accessTokenPath
   null  //customHeaders
 );
 var param = {
   grant_type: 'authorization_code',
   redirect_uri:'http://localhost:5000/oauth2callback=1'
 };
 oauth2.getOAuthAccessToken(code, param, tokenCallback);
