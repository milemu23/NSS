//Michelle Munksgard
//Javascript Map

   $(function(){
        try{
            IPMapper.initializeMap("map");
            
            var ipArray = JSON.parse(data);
            console.log(location[2]);
        
            
            IPMapper.addIPMarker("111.111.111.111");
        } catch(e){
            //handle error
        }
		 });