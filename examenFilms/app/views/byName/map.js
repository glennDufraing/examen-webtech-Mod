function(doc) {
   if(doc.type === 'acteur') {
	   emit(doc.id, doc);
   }
};