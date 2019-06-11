'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})
Route.get('keys', 'CryptController.keys')
Route.post('encrypt', 'CryptController.encrypt')
Route.post('decrypt', 'CryptController.decrypt')
Route.get('keys/v2', 'CryptV2Controller.keys')
Route.post('encrypt/v2', 'CryptV2Controller.encrypt')
Route.post('decrypt/v2', 'CryptV2Controller.decrypt')
