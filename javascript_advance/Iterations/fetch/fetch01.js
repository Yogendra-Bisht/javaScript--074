// This is about fetch method in javascript
// fetch(https://api.adviceslip.com/advice)
// Fetch data from the API
// f
fetch('https://app.metrolisboa.pt/status/getLinhas.php')
    .then(response => response.json())  // Converts the response into JSON format
    .then(data => {
        // console.log(data); // data is now a JavaScript object
        console.log(data.resposta["azul"]);
        
    })
    .catch(error => {
        console.error('Error:', error); // Handle any errors
    });
    // console.log(data.id)
    

