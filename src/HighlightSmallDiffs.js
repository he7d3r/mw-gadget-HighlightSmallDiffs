/**
 * Highlight any diffs which are too small
 * @author: Helder (https://github.com/he7d3r)
 * @license: CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0/>
 */
( function ( mw, $ ) {
'use strict';

if( mw.util.getParamValue( 'diff' ) !== null ){
	$( function(){
		var whiteSpaceChanges = function(){
			return $.trim( $( this ).text() ).length === 0;
		};
		$( '.diff-deletedline .diffchange-inline' ).filter( whiteSpaceChanges ).css( {
			background: '#FF7B7B',
			padding: '0 0.2em'
		} );
		$( '.diff-addedline .diffchange-inline' ).filter( whiteSpaceChanges ).css( {
			background: '#7BFF7B',
			padding: '0 0.2em'
		} );
		
	} );
}

}( mediaWiki, jQuery ) );