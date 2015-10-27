//Michelle Munksgard
//Javascript Map
   $(document).ready(function(){
	   "use strict";
            IPMapper.initializeMap("map");
            
            $.ajax({
                url: "ipaddresses.json",
                dataType: "text",
                success: function(data) {
            
            var ipArray = JSON.parse(data);        
            
            IPMapper.addIPMarker(ipArray.ipaddress);
        } 
			});
		 });