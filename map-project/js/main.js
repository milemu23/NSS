//Michelle Munksgard
//Javascript Map

$(function(){
    try{
        IPMapper.initializeMap("map");
            var ipArray = $.getJSON('ipaddresses.json', function(){
            .done(function(data) {
                ipArray = (location);
            });
            });
        IPMapper.addIPArray(ipArray);
    } catch(e){
    }
});