var readline = require('readline');
var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;

var CLIENT_ID = 'client id',
    CLIENT_SECRET = 'secret',
    REDIRECT_URL = 'http://localhost:5000?oauth2callback=1',
    SCOPE = 'https://www.googleapis.com/auth/admin.directory.user.readonly';

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var auth = new OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);

var url = auth.generateAuthUrl({ scope: SCOPE });
var getAccessToken = function(code) {
  auth.getToken(code, function(err, tokens) {
    if (err) {
      console.log('Error', err);
      return;
    }
    auth.credentials = tokens;
    upload();
  });
};

console.log('Visit the url: ', url);
rl.question('Enter the code here:', getAccessToken);
