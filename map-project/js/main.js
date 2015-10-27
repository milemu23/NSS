//Michelle Munksgard
//Javascript Map

$(function(){
    try{
        IPMapper.initializeMap("map");
        
		var ipArray = $.getJSON('ipaddresses.json', function(data){
                console.log(data);
                                        ipArray = (data);adfasdf
                
            });
        IPMapper.addIPArray(ipArray);
    } catch(e){
    }
});