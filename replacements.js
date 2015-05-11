	//
	//
	// Variables
	//
	//

var chairOne = 0;
var chairTwo = 0;
var couch = 0;
var table = 0;
var chairOneErr = 1;
var chairOneCurrent = "Chair 1 is in it's normal position.";
var chairTwoCurrent = "Chair 2 is in it's normal position.";
var couchCurrent = "Couch is in it's normal position.";
var tableCurrent = "Table is in it's normal position.";
var elemClicked = "";
var justClicked = false;

	//
	//
	// Functions
	//
	//

function resetAlert() {
	if (table === 1) {
		//document.getElementsByClassName("li.table").toggleClass("party");
		$("li.table").toggleClass("party");


	}
};

function furnitureClicked(elemClicked, justClicked) {

		if (justClicked === true) {
			$(elemClicked).toggleClass("party");
			elemClicked = false;
		} else {
			$(elemClicked).toggleClass("party");
				
		};
	};		


function partyCheck() {
		if (table === 1 && chairOne === 1 && chairTwo === 1 && couch === 1)  { 
			$("h1.congrats").show("h1.congrats");
			//var congratsVar = document.querySelectorAll('.congrats');
			//congratsVar[0].style.display = 'block';
		} else {
			$("h1.congrats").hide("h1.congrats");
			//var congratsVar = document.querySelectorAll('.congrats');
			//congratsVar[0].style.display = 'none';
	};
};

function outputCurrent() {

		if (chairOne === 1) { 
			chairOneCurrent = "Chair 1 is ready for the party."; 
		} else { 
			chairOneCurrent = "Chair 1 is in it's normal position.";  };
		
		if (chairTwo === 1) { 
			chairTwoCurrent = "Chair 2 is ready for the party."; 
		} else { 
			chairTwoCurrent = "Chair 2 is in it's normal position."; 
		};
		
		if (couch === 1) { c
			ouchCurrent = "Couch is ready for the party." 
		} else { 
			couchCurrent = "Couch is in it's normal position." };
		
		if (table === 1) { 
			tableCurrent = "Table is ready for the party." 
		} else { 
			tableCurrent = "Table is in it's normal position." 
		};

		console.log("Here's the current setup of the room:");
		console.log('Chair 1: ' + chairOneCurrent);
		console.log('Chair 2: ' + chairTwoCurrent);
		console.log('Couch: ' + couchCurrent);
		console.log('Table: ' + tableCurrent);

};

function alertCurrent() {
	if (table === 1 && chairOne === 1 && chairTwo === 1 && couch === 1)  { 
		alert("Yep. It is indeed time to party!");
	} else {
		
	$('#chair1').html(chairOneCurrent);
	// document.getElementById("chair1").innerHTML = chairOneCurrent;
	
	$('#chair2').html(chairOneCurrent);
	// document.getElementById("chair2").innerHTML = chairTwoCurrent;
	
	$('#couch').html(couchCurrent);
	// document.getElementById("couch").innerHTML = couchCurrent;

	$('#table').html(tableCurrent);
	// document.getElementById("table").innerHTML = tableCurrent;




	 alert("Not yet. You still have some furniture to move\n\nHere's the current setup of the room:\n\n" +
	 		'Chair 1: ' + chairOneCurrent + '\n'+
	 		'Chair 2: ' + chairTwoCurrent + '\n'+
	 		'Couch: ' + couchCurrent + '\n'+
	 		'Table: ' + tableCurrent 

	)}
};


	//
	//
	// Beginning of page
	//
	//

$(document).ready(function() {
		// $("h1.congrats").hide();

		console.log(chairOne);

		$(".chair1").click(function() {
			furnitureClicked("li.chair1", true);
			
			if (chairOne === 0) {			
					$(".chair1").animate({top: '300px', right: '', left: '100px'});
					chairOne = 1;
					outputCurrent();

				} else {
					$( ".chair1" ).animate({top: '100px', right: '', left: '100px'});
					chairOne = 0;
					outputCurrent();

				}
				
				//document.getElementById("chair1").innerHTML = chairOneCurrent;
				partyCheck();
				$('#chair1').html(chairOneCurrent);
			});


		$(".chair2").click(function() {
			furnitureClicked("li.chair2", true);
			if (chairTwo === 0) {
				
				$(".chair2").animate({top: '300px', right: '400px'});
					chairTwo = 1;
					outputCurrent();
					partyCheck();
			} else {
				$(".chair2").animate({top: '100px', right: '300px'});
				chairTwo = 0;
				outputCurrent();
				partyCheck();
					}
				//document.getElementById("chair2").innerHTML = chairTwoCurrent;
				$('#chair2').html(chairTwoCurrent);


			});

		$(".couch").click(function() {
			furnitureClicked(".couch", true);

			if (couch === 0) {
					$(this).animate({right: '350px'});
					couch = 1;
			} else {
					$(this).animate({right: '25px'});
					couch = 0;
			}
				
				//document.getElementById("couch").innerHTML = couchCurrent;
				$('#couch').html(couchCurrent);
				outputCurrent();
				partyCheck();

			});


		$(".table").click(function() {
			furnitureClicked(".table", true);
			if (table === 0) {
					$(this).animate({top: '15px', left: '900px'});
					table = 1;

				} else {
					$(this).animate({top: '50px', left: '200px'});
					table = 0;
				}

				//document.getElementById("table").innerHTML = tableCurrent;
				$("#table").innerHTML(tableCurrent);
				outputCurrent();
				partyCheck();

			});

		
	//
	//
	// show errors
	//
	//
	
		$(".check").click(function() {
			errorCheck();
		});

	//
	//
	// Move all furniture back
	//
	//

		$(".cleanup").click(function() {
			if (chairOne === 1) {
				$(".chair1").animate({top: '100px'});
				$("li.chair1").toggleClass("party");
				chairOne = 0;
			};

			if (chairTwo === 1) {
				$(".chair2").animate({top: '100px', right: '300px'});
				$("li.chair2").toggleClass("party");
				chairTwo = 0;
			};

			if (couch === 1) {
				$(".couch").animate({right: '25px'});
				$("li.couch").toggleClass("party");
				couch = 0;
			};

			if (table === 1) {
				$(".table").animate({top: '50px', left: '200px'});
				$("li.table").toggleClass("party");
				table = 0;
			};

			

		});
		
	//
	//
	//Alert current setup
	//
	//

		$(".currentsetup").click(function() {
			alertCurrent();
		});



});




