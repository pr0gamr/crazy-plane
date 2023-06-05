// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "road":
            case "level1":return tiles.createTilemap(hex`320007000303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303000000000004000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000400000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000040100000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000004000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000400000000000000000000000000000000000000000000000000000000000000000000000000000000000000020303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303`, img`
22222222222222222222222222222222222222222222222222
..................................................
..................................................
..................................................
..................................................
..................................................
22222222222222222222222222222222222222222222222222
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile3,myTiles.tile5,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "spawnpoint":
            case "tile1":return tile1;
            case "myTile1":
            case "tile3":return tile3;
            case "tree":
            case "tile4":return tile4;
            case "myTile":
            case "tile5":return tile5;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
