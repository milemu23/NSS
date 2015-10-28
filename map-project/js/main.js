//Michelle Munksgard
//Javascript Map
   $(document).ready(function(){
	   "use strict";
	   try {
            IPMapper.initializeMap("map");
           
           $.getJSON("ipaddress.json", function( data ){
               
           console.log(data.ipaddress);
           });
           
           for (var i = 0; i < ipArray.length; i++) {
               var ips = ipArray[i];
           }
           IPMapper.addIPMarker(ips);
       } catch(e){
           
       }    
   });