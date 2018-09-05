'use strict';


/**
 * @name emis-incident-type
 * @description A representation of an entity which provides
 * a way to set flags on service requests(issues) in order
 * to track their progress.
 *
 * @author Benson Maruchu <benmaruchu@gmail.com>
 * @author lally elias <lallyelias87@gmail.com>
 * @since  0.1.0
 * @version 0.1.0
 * @license MIT
 * @example
 *
 * const { app } = require('@codetanzania/emis-incident-type');
 * app.start();
 *
 */


/* dependencies */
const path = require('path');
const _ = require('lodash');
const app = require('@lykmapipo/express-common');


/* declarations */
const pkg = require(path.join(__dirname, 'package.json'));
const fields = [
  'name',
  'description',
  'version',
  'license',
  'homepage',
  'repository',
  'bugs',
  'sandbox',
  'contributors'
];


/* extract information from package.json */
const info = _.merge({}, _.pick(pkg, fields));


/* import models */
const IncidentType =
  require(path.join(__dirname, 'lib', 'incidenttype.model'));


/* import routers*/
const router =
  require(path.join(__dirname, 'lib', 'incidenttype.http.router'));


/* export package(module) info */
exports.info = info;


/* export incident type model */
exports.IncidentType = IncidentType;


/* export incident type router */
exports.incidentRouter = exports.router = router;


/* export router api version */
exports.apiVersion = router.apiVersion;


/* export app */
Object.defineProperty(exports, 'app', {
  get() {

    //TODO bind oauth middlewares authenticate, token, authorize

    /* bind incident type router */
    app.mount(router);
    return app;
  }

});