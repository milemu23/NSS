//Michelle Munksgard
//Javascript Map
   $(document).ready(function(){
	   "use strict";
	   try {
            IPMapper.initializeMap("map");
           
           $.getJSON("ipaddresses.json", function( data ){
               
           console.log(data.ipaddresses.ipaddress);
           });
           
           for (var i = 0; i < ipArray.length; i++) {
               var ips = ipArray[i];
           }
           IPMapper.addIPMarker(ips);
       } catch(e){
           
       }    
   });