//Michelle Munksgard
//Javascript Map
   $(document).ready(function(){
	   "use strict";
	   try{
            IPMapper.initializeMap("map");
            
            $.ajax({
                url: "js/ipTest.json",
                dataType: "jsonp",
                success: function(data) {
               
            var ipAdd = data.ipaddresses; 
			   
            IPMapper.addIPArray($(ipAdd.ipaddress).val());
			
        } 
		});
			}catch(e){
			}
			
			
		 });