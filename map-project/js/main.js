//Michelle Munksgard
//Javascript Map
   $(document).ready(function(){
	   "use strict";
	  
            IPMapper.initializeMap("map");
           
            
            $.ajax({
                url: 'ipaddresses.json',
                data: "",
                dataType: 'json',
                success: function(data) {
                    
                    console.log("Success!");
                
                    for (var i = 0; i < data.ipaddresses.length; i++){
                        ipaddress.push(data[i].ipaddress);
                    }
			
        } 
		})
		 console.log("Success!");	
			
			
		 });