/**
 * Highlight any diffs which are too small
 * @author: [[User:Helder.wiki]]
 * @tracking: [[Special:GlobalUsage/User:Helder.wiki/Tools/HighlightSmallDiffs.js]] ([[File:User:Helder.wiki/Tools/HighlightSmallDiffs.js]])
 */
/*jslint browser: true, white: true*/
/*global jQuery, mediaWiki */
( function ( mw, $ ) {
'use strict';

if( mw.util.getParamValue('diff') !== null ){
	$(function(){
		$('.diffchange-inline').filter(function(){
			return $( this ).text().length === 0;
		}).css( {
			background: '#FF7B7B',
			padding: '0 0.2em'
		} );
	});
}

}( mediaWiki, jQuery ) );