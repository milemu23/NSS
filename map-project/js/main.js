//Michelle Munksgard
//Javascript Map
   $(document).ready(function(){
	   "use strict";
            IPMapper.initializeMap("map");
            
            $.ajax({
                url: "js/ipTest.json",
                dataType: "jsonp",
                success: function(data) {
            console.log("It works!");    
            var ipAdd = data.ipaddress; 
			   
            IPMapper.addIPArray(ipAdd.ipaddress);
        } 
			});
		 });