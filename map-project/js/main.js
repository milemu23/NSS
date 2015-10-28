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
               
            var ipAdd = JSON.parse(data); 
			   
            IPMapper.addIPArray(ipAdd.ipaddress);
			
        } 
		});
			}catch(e){
			}
			
			
		 });