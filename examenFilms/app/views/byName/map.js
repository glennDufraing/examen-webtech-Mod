function(doc){
	if(doc.type==='acteur'){
		emit(doc.naam,doc);
	}
}