//Michelle Munksgard
//Javascript Map

$(function(){
    try{
        IPMapper.initializeMap("map");
            var ipArray = $.getJSON('ipaddresses.json', function(json){
                console.log(json);
                
                ipArray = ("ipaddress");
                
                
            });
        IPMapper.addIPArray(ipArray);
    } catch(e){
    }
});