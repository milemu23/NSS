//Michelle Munksgard
//Javascript Map
   $(document).ready(function(){
	   "use strict";
            IPMapper.initializeMap("map");
            
            $.ajax({
                url: "js/ipTest.json",
                dataType: "jsonp",
                success: function(data) {
            
            var ipAdd = data.ipaddress; 
			console.log("It works!");       
            IPMapper.addIPArray(ipAdd.ipaddress);
        } 
			});
		 });