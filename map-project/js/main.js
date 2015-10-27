//Michelle Munksgard
//Javascript Map

   $(function(){
        try{
            IPMapper.initializeMap("map");
            
            var ipArray = $.getJSON('ipaddresses.json', function(data){
                console.log(data);   
            });
            
            IPMapper.addIPMarker("111.111.111.111");
        } catch(e){
            //handle error
        }
		 });