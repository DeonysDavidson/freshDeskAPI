

// ********************************************Function to create cards dynamically********************************************************

const cardCreator = function(ele){
	console.log('Here');
	//<div id="counter">	
	var myNode = document.createElement('div');
	var divId = document.createAttribute('id');
	divId.value = 'counter';

	//<div class="col-md-3">
	var fireFightDiv = document.createElement('div');
	var fireFightClass = document.createAttribute('class');
	fireFightClass.value='card mb-3';
		var fireFightDivid = document.createAttribute('id');
		fireFightDivid.value = `${ele.id}`;
	fireFightDiv.setAttributeNode(fireFightClass);
	fireFightDiv.setAttributeNode(fireFightDivid);
	
	//<div class="row no-gutters">
	var innerNode1 = document.createElement('div');
	var innerNode1class = document.createAttribute('class');
	innerNode1class.value='row no-gutters'
	
	//<div class="col-md-2" style="padding:3px 3px 3px 3px;">
	var imgDiv = document.createElement('div');
	var imgDivClass = document.createAttribute('class');
	imgDivClass.value='col-md-2';
	var imgDivStyle = document.createAttribute('style');
	imgDivStyle.value='padding:3px 3px 3px 3px;';	
	
	//<img src="" class="card-img">
	var imgTag = document.createElement('img');
	var imgTagSrc = document.createAttribute('src');
	imgTagSrc.value='https://scontent.fmaa3-1.fna.fbcdn.net/v/t31.0-8/p960x960/18922520_1328011900585626_4900524174459089014_o.jpg?_nc_cat=102&_nc_sid=85a577&_nc_oc=AQlwcBMGkW7JtzRX49lOVe6AWVoTfLBWOkBfLe6WXdrGhBv4wBh3sreVDYtHl7Hdrwg&_nc_ht=scontent.fmaa3-1.fna&_nc_tp=6&oh=778b02a5612d4f4b94de2f2d9a127e78&oe=5EDCA782';
	
	var imgTagClass = document.createAttribute('class');
	imgTagClass.value='card-img';
	
	//<div class="col-md-6">
	var card1 = document.createElement('div');
	var card1Class = document.createAttribute('class');
	card1Class.value='col-md-6';
	card1.setAttributeNode(card1Class);
	
	//<div class="card-body">
	var card1Div = document.createElement('div');
	var card1DivClass = document.createAttribute('class');
	card1DivClass.value='card-body';
	card1Div.setAttributeNode(card1DivClass);
	
	//<h5 class="card-title">Card title</h5>
	var card1H5 = document.createElement('h5');
	var card1H5Class = document.createAttribute('class');
	card1H5Class.value='card-title';
	card1H5.innerHTML = ele.subject;
	card1H5.setAttributeNode(card1H5Class);
	
	//<p class="card-text">This is a wider card with supporting text.</p>
	var card1P = document.createElement('p');
	var card1PClass = document.createAttribute('class');
	card1PClass.value='card-text';
	card1P.innerHTML = `Type : ${ele.type}`;
	card1P.setAttributeNode(card1PClass);
	
	//<p class="card-text">
	var card1P2 = document.createElement('p');
	var card1P2Class = document.createAttribute('class');
	card1P2Class.value='card-text';
	card1P2.setAttributeNode(card1P2Class);
	
	//<small class="text-muted">Last updated 3 mins ago</small>
	var card1Small = document.createElement('small');
	var card1SmallClass = document.createAttribute('class');
	card1Small.value='text-mutated';
	card1Small.innerHTML = 'Ticket ID :' + ele.id;
	card1Small.setAttributeNode(card1SmallClass);
	
	//<div class="col-md-2">
	var card2 = document.createElement('div');
	var card2Class = document.createAttribute('class');
	card2Class.value='col-md-2';
	card2.setAttributeNode(card2Class);
	
	//<div class="card-body">
	var card2Body = document.createElement('div');
	var card2BodyClass = document.createAttribute('class');
	card2BodyClass.value = 'card-body';
	card2Body.setAttributeNode(card2BodyClass);
	
	//<button type="button" class="btn btn-outline-secondary">Edit</button>
	var card2Button = document.createElement('button');
	var card2ButtonType = document.createAttribute('type');
	card2ButtonType.value = 'button';
	var card2ButtonValue = document.createAttribute('value');
	card2ButtonValue.value = ele.id;
	var	card2ButtonOnclick = document.createAttribute('onclick');
	card2ButtonOnclick.value = `assignTicketId(${ele.id})`;
	var card2ButtonClass = document.createAttribute('class');
	card2ButtonClass.value = 'btn btn-outline-secondary';
    card2Button.innerHTML='Edit';
	
	card2Button.setAttributeNode(card2ButtonType);
	card2Button.setAttributeNode(card2ButtonClass);
	card2Button.setAttributeNode(card2ButtonValue);
	card2Button.setAttributeNode(card2ButtonOnclick);
	
	//<div class="col-md-2">
	var card3 = document.createElement('div');
	var card3Class = document.createAttribute('class');
	card3Class.value='col-md-2';
	card3.setAttributeNode(card3Class);
	
	//<div class="card-body">
	var card3Body = document.createElement('div');
	var card3BodyClass = document.createAttribute('class');
	card3BodyClass.value = 'card-body';
	card3Body.setAttributeNode(card3BodyClass);
	
	//<button type="button" class="btn btn-outline-danger">Delete</button>
	var card3Button = document.createElement('button');
	var card3ButtonType = document.createAttribute('type');
	card3ButtonType.value = 'button';
	var card3ButtonValue = document.createAttribute('value');
	card3ButtonValue.value = ele.id;
	var	card3ButtonOnclick = document.createAttribute('onclick');
	card3ButtonOnclick.value = `deleteTicket(${ele.id})`;
	var card3ButtonClass = document.createAttribute('class');
	card3ButtonClass.value = 'btn btn-outline-danger';
	card3Button.innerHTML='Delete';
	
	// Appending all the child tags to their parents
	card3Button.setAttributeNode(card3ButtonType);
	card3Button.setAttributeNode(card3ButtonClass);
	card3Button.setAttributeNode(card3ButtonValue);
	card3Button.setAttributeNode(card3ButtonOnclick);
	
	card2Body.appendChild(card2Button);
	card2.appendChild(card2Body);
	
	card3Body.appendChild(card3Button);
	card3.appendChild(card3Body);
	
	card1P2.appendChild(card1Small);
	card1Div.appendChild(card1H5);
	card1Div.appendChild(card1P);
	card1Div.appendChild(card1P2);
	
	card1.appendChild(card1Div);
	
	
	innerNode1.setAttributeNode(innerNode1class);
	
	imgDiv.setAttributeNode(imgDivClass);
	imgDiv.setAttributeNode(imgDivStyle);
	
	imgTag.setAttributeNode(imgTagSrc);
	imgTag.setAttributeNode(imgTagClass);
	
	imgDiv.appendChild(imgTag);
	innerNode1.appendChild(imgDiv);
	innerNode1.appendChild(card1);
	innerNode1.appendChild(card2);
	innerNode1.appendChild(card3);
	fireFightDiv.appendChild(innerNode1);
	myNode.appendChild(fireFightDiv);
	
	myNode.setAttributeNode(divId);
	document.getElementById('counter').appendChild(fireFightDiv);
}

// ********************************************Get operation to get the ticket data********************************************************

function getTicket(){
	let url = 'https://deonysdavidson.freshdesk.com/api/v2/tickets';
	fetch(url,{
		method:'GET',
        headers: {
        "Authorization": "Basic " + btoa("ZjQqNJajpdguxiygDHj" + ":" + "x"),
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       }, 
  

     })
	.then(data => data.json())
	.then(data => {console.log(data)
		//creating cards based on the data availible
        data.map(ele => cardCreator(ele))
	 })
	.catch(err => console.log(err));
}

// ********************************************post operation to post new ticket data********************************************************

 function postTicket() {
 	// getting the values given in the form
 	var x= document.getElementById("status");
    var y = parseInt(x.options[x.selectedIndex].value);
    var a= document.getElementById("priority");
    var b = parseInt(a.options[a.selectedIndex].value);
    var c= document.getElementById("type");
    var d = c.options[c.selectedIndex].value;
    var sub = document.getElementById('subject').value;
    var des = document.getElementById('description').value;
    var	email = document.getElementById('contact').value;
    
    // performing the post process
    let url = 'https://deonysdavidson.freshdesk.com/api/v2/tickets';
	fetch(url,{
		method:'POST',
        headers: {
        "Authorization": "Basic " + btoa("ZjQqNJajpdguxiygDHj" + ":" + "x"),
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       }, 
       body :JSON.stringify({
       	  subject : `${sub}`,
          description : `${des}`,
          status : y,
          priority : b,
          email :  `${email}`,
          type : d
       })

     })
	.then(data => data.json())
	.then(data => {
	if(data.errors){
		data.errors.map(ele => {
          alert(`Invalid ${ele.field}`);
          })
      }
      else{
      	alert('Created Sucess!');
      	location.replace('index.html');
      }
 })
	.catch(err => console.log(err));

}

// ********************************************delete operation to delete the ticket data********************************************************

function deleteTicket(id){
	let url = `https://deonysdavidson.freshdesk.com/api/v2/tickets/${id}`;
	fetch(url,{
		method : 'DELETE',
		headers: {
        "Authorization": "Basic " + btoa("ZjQqNJajpdguxiygDHj" + ":" + "x"),
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       }	
	})
    
	.then(data => console.log(data))
	.catch(err => console.log(err));

	var card = document.getElementById(`${id}`);
	card.remove();
}

// ********************************************Update operation to update ticket data********************************************************


function updateTicket(){
	//getting the values given in the field
 	var x= document.getElementById("status");
    var y = parseInt(x.options[x.selectedIndex].value);
    var a= document.getElementById("priority");
    var b = parseInt(a.options[a.selectedIndex].value);
    var c= document.getElementById("type");
    var d = c.options[c.selectedIndex].value;
    var sub = document.getElementById('subject').value;
    var des = document.getElementById('description').value;
    var	email = document.getElementById('contact').value;
    
    //getting the id value from the URL
	var id = parent.document.URL.substring(parent.document.URL.indexOf('?'), parent.document.URL.length);
    var trueid = id.substring(4);
    
    //performing the updation process
	let url = `https://deonysdavidson.freshdesk.com/api/v2/tickets/${trueid}`;
	fetch(url,{
		method : 'PUT',
		headers: {
        "Authorization": "Basic " + btoa("ZjQqNJajpdguxiygDHj" + ":" + "x"),
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       body :JSON.stringify({
       	  subject : `${sub}`,
          description : `${des}`,
          status : y,
          priority : b,
          email :  `${email}`,
          type : d
       })
	})
    .then(data => data.json())
	.then(data => {
		//error handling
		if(data.errors){
		data.errors.map(ele => {
          alert(`Invalid ${ele.field}`);
          })
      }
      else{
      	alert('Update Sucess!');
      	location.replace('index.html');
      }
	
})
	.catch(err => console.log(err));
}


// ********************************************Assining ticket ID to URL********************************************************

function assignTicketId(id){
	
    location.replace(`update.html?id=${id}`);

}

// ****************************************GEt operation to get ticket data to be updated****************************************

function getUpdateTicket(){
	
	 //getting the id value from the URL
    var id = parent.document.URL.substring(parent.document.URL.indexOf('?'), parent.document.URL.length);
    var trueid = id.substring(4);

    //getting the ticket data to be updated
	let url = `https://deonysdavidson.freshdesk.com/api/v2/tickets/${trueid}`;
	fetch(url,{
		method:'GET',
        headers: {
        "Authorization": "Basic " + btoa("ZjQqNJajpdguxiygDHj" + ":" + "x"),
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       }

  

     })
	.then(data => data.json())
	.then(data => {
		//populating data with the fields availible
		document.getElementById('subject').value = data.subject;
		document.getElementById('type').value = data.type;
		document.getElementById('status').value = data.status;
		document.getElementById('priority').value = data.priority;
		document.getElementById('description').value = data.description_text;
	 })
	.catch(err => console.log(err));
	 
}

// ****************************************Routers****************************************

