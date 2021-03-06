/**
 * Created by School on 2/11/2016.
 */
//The base zoom for ths app should be 4, max and min for now.  Then work in zoome layers
//This whole idea was proven to be viable when I found the following project.
//http://www.iamcal.com/world-of-mapcraft/
//https://developers.google.com/maps/documentation/javascript/maptypes#ImageMapTypes

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 0, lng: 0},
        zoom: 4,
        streetViewControl: false,
        mapTypeControlOptions: {
            mapTypeIds: ['archaevas']
        }
    });
    var archaevasMapType=new google.maps.ImageMapType({
        getTileUrl: function(coord,zoom){
            var normalizedCoord= getNormalizedCoord(coord,zoom);
            if (!normalizedCoord){
                return null
            }
            var bound=Math.pow(2,zoom);
        //    C:\Users\School\Downloads\Archaevian Midlands 7 Maptiles
        return 'file:///localhost/C:/Users/School/WebstormProjects/Project_1/maptiles/archaevas_'+normalizedCoord.x+"-"+normalizedCoord.y+".jpeg"
        },
        tileSize:
            new google.maps.Size(538,433),
        maxZoom:4,
        minZoom:4,
        radius:5362944,
        name:'archaevas'
    })
    map.mapTypes.set('archaevas',archaevasMapType);
    map.setMapTypeId('archaevas');
    //var moonMapType = new google.maps.ImageMapType({
    //    getTileUrl: function(coord, zoom) {
    //        var normalizedCoord = getNormalizedCoord(coord, zoom);
    //        if (!normalizedCoord) {
    //            return null;
    //        }
    //        var bound = Math.pow(2, zoom);
    //        return '//mw1.google.com/mw-planetary/lunar/lunarmaps_v1/clem_bw' +
    //            '/' + zoom + '/' + normalizedCoord.x + '/' +
    //            (bound - normalizedCoord.y - 1) + '.jpg';
    //    },
    //    tileSize: new google.maps.Size(538, 433),
    //    maxZoom: 4,
    //    minZoom: 4,
    //    radius: 1738000,
    //    name: 'Moon'
    //});
    //
    //map.mapTypes.set('moon', moonMapType);
    //map.setMapTypeId('moon');
}

// Normalizes the coords that tiles repeat across the x axis (horizontally)
// like the standard Google map tiles.
function getNormalizedCoord(coord, zoom) {
    var y = coord.y;
    var x = coord.x;

    // tile range in one direction range is dependent on zoom level
    // 0 = 1 tile, 1 = 2 tiles, 2 = 4 tiles, 3 = 8 tiles, etc
    var tileRange = 1 << zoom;

    // don't repeat across y-axis (vertically)
    if (y < 0 || y >= tileRange) {
        return null;
    }

    // repeat across x-axis
    if (x < 0 || x >= tileRange) {
        x = (x % tileRange + tileRange) % tileRange;
    }

    return {x: x, y: y};
}