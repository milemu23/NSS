//Michelle Munksgard
//Javascript Map
   $(document).ready(function(){
	   "use strict";
	   try{
            IPMapper.initializeMap("map");
           
            
            $.ajax({
                url: "ipaddresses.json",
                dataType: "json",
                success: function(data) {
                    for (var i = 0; i < data.length; i++){
                        console.log("Hello!");
                    }
			
        } 
		});
			}catch(e){
			}
			
			
		 });