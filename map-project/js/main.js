//Michelle Munksgard
//Javascript Map
   $(document).ready(function(){
	   "use strict";
	  
            IPMapper.initializeMap("map");
           
            
            $.ajax({
                url: "ipaddresses.json",
                dataType: "json",
                success: function(data) {
                    console.log("SUCCESS!");
                    
                    for (var i = 0; i < data.length; i++){
                        console.log("Hello!");
                    }
			
        } 
		});
			
			
			
		 });