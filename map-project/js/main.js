//Michelle Munksgard
//Javascript Map
   $(document).ready(function(){
	   "use strict";
	  
            IPMapper.initializeMap("map");
           
            
            $.ajax({
                url: 'ipaddresses.json',
                data: { get_param: 'value' },
                dataType: 'json',
                success: function(ipaddresses) {
                    
                    console.log("Success!");
                    var ipArray = $.parseJSON(ipaddresses);
                    for (var i = 0; i < ipArray.length; i++){
                        ipArray[i].ipaddress;
                    }
        } 
		})
		 	
			
			
		 });