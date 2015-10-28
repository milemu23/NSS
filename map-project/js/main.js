//Michelle Munksgard
//Javascript Map
   $(document).ready(function(){
	   "use strict";
            IPMapper.initializeMap("map");
            
            $.ajax({
                url: "ipaddresses.json",
                dataType: "jsonp",
                success: function(data) {
            
            var ipAdd = data.ipaddress.val(); 
			console.log(ipAdd);       
            IPMapper.addIPArray(ipAdd);
        } 
			});
		 });