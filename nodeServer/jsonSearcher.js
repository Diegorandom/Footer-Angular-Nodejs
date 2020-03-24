/*	
	To search an object for a value
		- searches deep into the object using recursive...
	RETURN : array with paths on the object to the matching results
	--------------------------------------------------------------------------------------------------------------------
	obj 					->  to object to be searched
	searchValue	 			-> 	the value to search
	bCompareValuesOnly		-> 	boolean indication to compare values only OR to compare also the properties name  .... 
	maxDeepLevel			-> 	the maximun level this recursive function can get ( to avoid "Maximum call stack size exceeded" )
	currDeepLevel 			-> 	IGNORE THIS PARAMETER : it's used by the function itself to control deep level
*/
module.exports = function(obj, searchValue, bCompareValuesOnly, maxDeepLevel, currDeepLevel){
	
	var bShowInfo = false ;
	
	maxDeepLevel = ( maxDeepLevel || maxDeepLevel == 0 ) ? maxDeepLevel : 20;
	currDeepLevel = currDeepLevel ? currDeepLevel : 1 ;
	
	
	if( currDeepLevel > maxDeepLevel ){
		return [];
	} else {
		var charSeparator = "/";
		var paths = [];
		var i=0;
		
		for(var curr in obj){
			var currElem = obj[curr];
			
			if( currDeepLevel == 1 && bShowInfo ){
				console.log("getValuePathInObject_> Looking property \"" + curr + "\" ");
			}
			
			if( !bCompareValuesOnly && curr === searchValue  ){// To search for property name too ... 
				paths.push( curr );
			}
			
			if( typeof currElem == "object" ){ // object is "object" and "array" is also in the eyes of "typeof"
				// search again :D 
				var deepPaths = getValuePathInObject( currElem, searchValue, bCompareValuesOnly, maxDeepLevel, currDeepLevel + 1 );
				
				for(var e=0 ; e<deepPaths.length ; e++){
					paths.push( curr + charSeparator + deepPaths[e]);
				}
			} else { // it's something else ... problably the value we are looking for
				// compares with "searchValue"
				if(currElem === searchValue ){ 
					// return index AND/OR property name
					paths.push( curr );
				}
			}
			i++;
		}
        console.log("values found in object", paths);
		return paths;
	}
}