//Michelle Munksgard
//Javascript Map
   $(document).ready(function(){
	   "use strict";
	   try {
            IPMapper.initializeMap("map");
           
            var ipArray = JSON.parse(data);
           for (var i = 0; i < ipArray.ipaddresses.length; i++) {
               var ips = ipArray.ipaddresses[i].val();
               IPMapper.addIPArray(ips);
           }
           
       } catch(e){
           
       }    
   });