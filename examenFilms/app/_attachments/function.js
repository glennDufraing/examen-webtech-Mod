function splitTekst(){
	var naam = $('#naam').val();
	
	var gesplitst = naam.split(' ');
	var totaalnaam= gesplitst[0]+'+'+gesplitst[1];
	return totaalnaam;
}
function putFilm(id, films){
	var doc ={};
	var id = id;
	var films= films;
	
	doc.id=id;
	doc.films=films;
	doc.type='acteur';
	var json = JSON.stringify(doc);
	$.ajax({
		type:			'PUT',
		url:				'../../' + id,
		data:			json,
		contentType: 	'application/json',
		async:			true,
		success:		function(data){
			console.log("put gelukt");
			
		},
		error:		function(XMLHttpRequest, textStatus, errorThrown){
			console.log(errorThrown); 
		}
	});
}