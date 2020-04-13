'use strict';

var utils = require('../utils/writer.js');
var GetEineKampagneBerDenNamen = require('../service/GetEineKampagneBerDenNamenService');

module.exports.kampagneName_KampagneGetByName = function kampagneName_KampagneGetByName (req, res, next) {
  var kampagneName = req.swagger.params['KampagneName'].value;
  GetEineKampagneBerDenNamen.kampagneName_KampagneGetByName(kampagneName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
