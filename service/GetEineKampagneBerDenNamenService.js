'use strict';


/**
 * 
 * zeigt eine Kampagne über den Namen an
 *
 * kampagneName String Name der Kampagne, die man sich anzeigen mächte
 * returns KampagneName
 **/
exports.kampagneName_KampagneGetByName = function(kampagneName) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Kampagne_Name" : "Kampagne_Name",
  "Kampagne_von_Datum" : "2000-01-23T04:56:07.000+00:00",
  "Kampagne_Segment" : "LV",
  "Kampagne_Beschreibung" : "Kampagne_Beschreibung",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

