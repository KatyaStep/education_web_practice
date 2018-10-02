document.querySelector("#button1").addEventListener("click", textFileLoad);

function textFileLoad(){
    //Create an XHR object
    const xhr = new XMLHttpRequest();

    //OPEN
    xhr.open('GET', 'text.txt', true);
    console.log("READYSTATE", xhr.readyState);

    // Optional - Used for spinners/loaders
    xhr.onprogress = function(){
        console.log('READYSTATE' , xhr.readyState);
    }

    xhr.onload = function() {
        if(this.status == 200){
            console.log(this.responseText);
            document.querySelector("#output").innerHTML = 
            `<p>${this.responseText}</p>`
        }

        // HTTP Statuces
        // "200" : OK
        // "403" : Forbidden
        // "404" : Not found


        //readyState values:
        // 0 request is not initialized 
        // 1 server connection established
        // 2 request recieved
        // 3 processing request
        // 4 request finished and respond is ready

    }

    xhr.send();
}

document.querySelector("#button2").addEventListener('click',customerLoad);

function customerLoad(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);
    
    xhr.onload = function() {
        if(this.status == 200){
            console.log(this.responseText);
            const customer = JSON.parse(this.responseText);
            const output = `
            <ul>
            <li>ID: ${customer.id}</li>
            <li>Name: ${customer.name}</li>
            <li>Company: ${customer.company}</li>
            <li>Phone: ${customer.phone}</li>
            `
            document.querySelector("#customer").innerHTML = output;
        }
    }
    xhr.send();


}


document.querySelector("#button3").addEventListener('click',customersLoad);

function customersLoad(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customers.json', true);
    
    xhr.onload = function() {
        if(this.status == 200){
            console.log(this.responseText);
            const customers = JSON.parse(this.responseText);
            let output=``;
            customers.forEach(function(customer){
                output+= `
                <ul>
                <li>ID: ${customer.id}</li>
                <li>Name: ${customer.name}</li>
                <li>Company: ${customer.company}</li>
                <li>Phone: ${customer.phone}</li>
                </ul>`
                 });
            document.querySelector("#customers").innerHTML = output;
        }
    }
    xhr.send();


}