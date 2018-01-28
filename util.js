export function transformStringToHex( str ) {

    if ( str.charAt( 0 ) !== "#" ) {

        return null;

    }

    return parseInt( str.substring( 1 ), 16 );

}