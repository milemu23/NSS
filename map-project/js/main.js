//Michelle Munksgard
//Javascript Map
   $(document).ready(function(){
	   "use strict";
            IPMapper.initializeMap("map");
            
            $.ajax({
                url: "js/pTest.json",
                dataType: "jsonp",
                success: function(data) {
            
            var ipAdd = data.ipaddresses; 
			console.log("It works!");       
            IPMapper.addIPArray(ipAdd.ipaddress);
        } 
			});
		 });