
 function generateEmail() {
const url = new URL(
    'https://control.msg91.com/api/v5/email/send'
  );
  
  let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "authkey": "443146AZZwJjWmMz667c9ed93P1"
  };
  
  let body = {
  "recipients": [
    {
      "to": [
        {
          "email": "itsbabin2004@gmail.com",
          "name": "Biswajit Mandal"
        },
    ],
    "variables" : {
        "company_name": "kishalaycare",
        "otp" : "1456"
      }
    }
  ],
  "from": {
    "email": "no-reply@kishalaycare.in"
  },
  "domain": "kishalaycare.in",
  "template_id": "global_otp"
  }

  
  fetch(url, {
      method: 'POST',
      headers: headers,
      body:  JSON.stringify(body)
  })
  .then(response => response.json())
  .then(json => console.log(json));
  
}

generateEmail()
