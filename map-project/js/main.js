//Michelle Munksgard
//Javascript Map

$(function(){
    try{
        IPMapper.initializeMap("map");
            var ipArray;
            $.getJSON('ipaddresses.json')
            .done(function(data) {
                ipArray = data;
            })
        IPMapper.addIPArray(ipArray);
    } catch(e){
    }
});