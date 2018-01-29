export function transformStringToHex( str ) {

    if ( str.charAt( 0 ) !== "#" ) {

        return null;

    }

    return parseInt( str.substring( 1 ), 16 );

}

export function constrain ( v, min, max ) {

    if ( v < min ) {

        v = min;

    } else if ( v > max ) {

        v = max;

    }

    return v;

}