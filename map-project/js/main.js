//Michelle Munksgard
//Javascript Map
   $(document).ready(function(){
	   "use strict";
	   try{
            IPMapper.initializeMap("map");
            
            $.ajax({
                url: "js/ipTest.json",
                dataType: "json",
                success: function(data) {
               
            var ipAdd = data.ipaddresses; 
			   
            IPMapper.addIPArray(ipAdd.ipaddress);
			
        } 
		});
			}catch(e){
			}
			
			
		 });