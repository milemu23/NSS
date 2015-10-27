//Michelle Munksgard
//Javascript Map

   $(function(){
        try{
            IPMapper.initializeMap("map");
            IPMapper.addIPMarker("111.111.111.111");
        } catch(e){
            //handle error
        }