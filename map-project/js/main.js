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
                
                    for (var i = 0; i < data.length; i++){
                        ipaddress.push(data[i].ipaddress);
                    }
			
        } 
		});
			
			
			
		 });