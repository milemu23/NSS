//Michelle Munksgard
//Javascript Map
   $(document).ready(function(){
	   "use strict";
	   try {
            IPMapper.initializeMap("map");
           
            var ipArray = JSON.parse(ipaddresses);
           for (var i = 0; i < ipArray.length; i++) {
               var ips = ipArray[i];
               console.log(ipArray);
           }
           IPMapper.addIPArray(ips);
       } catch(e){
           
       }    
   });