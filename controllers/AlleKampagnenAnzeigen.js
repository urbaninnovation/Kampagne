'use strict';

var utils = require('../utils/writer.js');
var AlleKampagnenAnzeigen = require('../service/AlleKampagnenAnzeigenService');

module.exports.kampagneList_KampagneGet = function kampagneList_KampagneGet (req, res, next) {
  AlleKampagnenAnzeigen.kampagneList_KampagneGet()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
