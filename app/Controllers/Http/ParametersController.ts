import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import RaisonSociale from 'App/Models/RaisonSociale'
import RaisonSocialValidator from 'App/Validators/RaisonSocialValidator';

export default class ParametersController {

  async raisonSocial({view,params}: HttpContextContract) {
    let raison_social = await RaisonSociale.first()
    let raison_social_to_edit;
    if(params.id) {
      let raison_id = params.id;
      raison_social_to_edit = await RaisonSociale.find(raison_id);
    } else {
      raison_social_to_edit = false;
    }

    return view.render("params/raisonSocial",{
      'raison_social': raison_social,
      'raison_social_to_edit': raison_social_to_edit
    })
  }

  images({view}: HttpContextContract) {
     return view.render('params/images')
  }

  async saveRaisonSocial({request,session,response}: HttpContextContract) {
    let raisonsocial:RaisonSociale|null = new RaisonSociale();
    if(request.all().id) {
      raisonsocial = await RaisonSociale.findOrFail(request.all().id);
    }
    raisonsocial.merge(await request.validate(RaisonSocialValidator)).save();
    session.flash({success: 'Le paramètre raison social est bien sauvegardé'})
    response.redirect().toRoute('raison_social');
  }


  async getRaisonSocial({params,response}: HttpContextContract) {
    let raison_id = params.id;
    let raison_social = await RaisonSociale.find(raison_id);
    return response.json({'raison_social': raison_social});
  }

}
