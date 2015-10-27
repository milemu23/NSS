//Michelle Munksgard
//Javascript Map
"use strict";
   $(function(){
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