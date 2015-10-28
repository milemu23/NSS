//Michelle Munksgard
//Javascript Map
   $(document).ready(function(){
	   "use strict";
	   try{
            IPMapper.initializeMap("map");
           console.log("Hello!");
            
            $.ajax({
                url: "ipaddresses.json",
                dataType: "json",
                success: function(data) {
                    for (var i = 0; i < data.length; i++){
                         var ipAdd = JSON.parse(data);
                        IPMapper.addIPArray(ipAdd.ipaddress);
                    }
			
        } 
		});
			}catch(e){
			}
			
			
		 });