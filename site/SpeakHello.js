//IIFE for helloSpeaker Object

(function(window){
	var helloSpeaker = {}
	var speakWord = "Hello";

	helloSpeaker.speak = function (name) {
  	console.log(speakWord + " " + name);
    } 

    window.helloSpeaker = helloSpeaker //Exposing helloSpeaker 


})(window)

