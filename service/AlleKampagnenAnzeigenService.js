'use strict';


/**
 * Liste aller Kampagnen anzeigen
 * Zeigt alles an
 *
 * returns Kampagne
 **/
exports.kampagneList_KampagneGet = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

