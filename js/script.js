$( document ).ready(function() 
{
	$.ajax({url: $("#entry-template").attr('src'),dataType:'html'}).done(function(source)
	{
		var tableau = ['Afficher toutes vos photos et vidéos Instagram', 'Afficher toutes les photos de vos tweets', 'Afficher les photos de vos publications Google+'];
		for (var i = 0; i < 3; i++) {
			var data = {text: tableau[i], id : i};
			var template = Handlebars.compile(source);
			$('#bouton').prepend(template(data));
		}	
	});
});