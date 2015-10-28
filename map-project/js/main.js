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
                    var ipArray = data.ipaddresses.ipaddress;
                    for (var i = 0; i < ipArray.length; i++){
                        ipArray[i].ipaddress;
                    }
			
        } 
		})
		 console.log("Success!");	
			
			
		 });