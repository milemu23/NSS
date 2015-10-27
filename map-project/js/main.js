//Michelle Munksgard
//Javascript Map

   $(document).ready(function(){
        try{
            IPMapper.initializeMap("map");
            
            $.ajax({
                url: "ipaddresses.json",
                dataType: "text",
                success: function(data) {
            
            var ipArray = JSON.parse(data);        
            
            IPMapper.addIPMarker(json.ipaddress);
        } catch(e){
            //handle error
        }
		 });