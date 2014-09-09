// servo.js
// utilities and waveforms to control servos connected through headphone port

jQuery(function($){
  
  
  window.servodata.audoioElements=jQuery("<div class=\"audioElements pmfb\"></div>");
  $('body').append(window.servodata.audoioElements);

  $('body').append($('<div style="border:2px solid green;"/>').append($('<input type="button value="init1()" onclick="window.init1();"/>')));
  
window.init1=function(){
	var i=0;
	var getAudioElement=function(ii){
		var ind = jQuery('.infodiv');
		ind.html('getAudioElement ii='+ii);
		var rtn =  jQuery('<audio controls class="paudio percent_'+ii+'" src="'+window.servodata.T25[ii]+'"/>');
		ind[0].innerHTML+="<br/>getAudioElement ii="+ii;
		return rtn;
	};
	for(i=0;i<window.servodata.T25.length;i+=1)
	{

		var ae = getAudioElement(i);
		window.servodata.audoioElements.append(ae);
		
	}

};


  
  
  
  
});
