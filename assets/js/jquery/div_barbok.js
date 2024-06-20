var jQuery = $,
	img = new Array(),
	div_handle_images = jQuery( 'div#ressource_box' );
	div_handle_images
		.css( 'position', 'absolute' )
		.hide();
function show_image(url, name_res, cat_res)
{
	/*var handle,
		formatted_name = url + '__' + name_res + '__' + cat_res;
	name_res = name_res.replace( '__', '\'' );
	cat_res = cat_res.replace( '__', '\'' );
	div_handle_images.find( 'div' ).each( function ()
	{
		$( this ).hide();
	} );
	if( typeof img[formatted_name] != undefined )
	{
		handle = $( '<div></div>' )
			.addClass( 'url-' + url )
			.html( '<img src="' + url + '" style="width: 100px; height: 100px;" />'
			 + '<br /><b>Nom</b>:&nbsp;' + name_res + '<br /><b>Cat&eacute;gorie</b>:&nbsp;' + cat_res )
			.appendTo( div_handle_images )
			.show()
			.find( 'img' )
			.wrap( '<div align="center"></div>' );
		img[formatted_name] = handle;
	}
	else
	{
		img[formatted_name].show();
	}
	div_handle_images.show();*/
}
$.fn.image = function(src, f)
{
	return this.each( function()
	{
		$( '<img />' ).attr( 'src', src ).load( f ).appendTo( this );
	} );
}
	/**
	 * Dans les objets, pour les ressources
	 * avec le code suivant apr�s <body>:
	 * <div id="ressource_box"></div>
	 *
	 * Exemple:
	 * <a href="#" onmouseover="show_image('URL', 'nom de la res', 'cat de la res')" class="res"></a>
	**/
	$( 'a.res' ).each( function()
	{
		$( this )
			.hover( function( e )
			{
				div_handle_images
					.show()
					.css( 'left', e.pageX + 5 )
					.css( 'top', e.pageY + 5 );
			},
			function()
			{
				div_handle_images.hide();
			} );
	} );