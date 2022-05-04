/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.get("/raison_social/:id?",'ParametersController.raisonSocial').as('raison_social')
Route.get("/images",'ParametersController.images').as('images')
Route.post('/saveRaisonSocial','ParametersController.saveRaisonSocial').as('saveRaisonSocial');
Route.get('/getRaisonSocial/:id','ParametersController.getRaisonSocial').as('get_raison_social');
Route.get('/modePayment/:id?','PaymentModsController.modPaymemnt').as('modPaymemnt');
Route.post('/savePaymentMode','PaymentModsController.savePaymentMode').as('savePaymentMode');
Route.get('/listModePaiement','PaymentModsController.listModePaiement').as('listModePaiement')
Route.get('/tvaList','PaymentModsController.listTva').as('tva_list');
Route.get('/tvaEdit/:id?','PaymentModsController.editTva').as('tva_edit');
Route.post('/saveTva','PaymentModsController.saveTva').as('save_tva');
Route.get('/ursaff','PaymentModsController.getursaff').as('ursaff');
Route.post('/saveUrsaf','PaymentModsController.saveUrsaf').as('saveUrsaf');
