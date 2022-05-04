import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import ModePaiement from "App/Models/ModePaiement";
import Tva from "App/Models/Tva";
import Ursaff from "App/Models/Ursaff";
import ModePaiementValidator from "App/Validators/ModePaiementValidator";
import TvaValidator from "App/Validators/TvaValidator";

export default class PaymentModsController {
  /**
   *
   * @param {HttpContextContract} {view}
   * @returns
   *
   * @memberOf PaymentModsController
   */
  async modPaymemnt({ view, params }: HttpContextContract) {
    if (params.id) {
      const modePaiement = await ModePaiement.find(params.id);
      return view.render("params/modePayment", {
        modePaiement: modePaiement,
      });
    } else {
      return view.render("params/modePayment");
    }
  }

  async savePaymentMode({ request, session, response }: HttpContextContract) {
    var modePaiement:ModePaiement|null = new ModePaiement();
    if (request.all().mode_paiement_id) {
      modePaiement = await ModePaiement.find(
        request.all().mode_paiement_id
      );
    }
    modePaiement?.merge(await request.validate(ModePaiementValidator)).save();
    session.flash({
      success: "Le mode de paiement est bien sauvegardé",
    });
    response.redirect().toRoute("listModePaiement");
  }

  /**
   *
   *
   * @param {HttpContextContract} {request, session, response}
   *
   * @memberOf PaymentModsController
   */
  async saveTva({ request, session, response }: HttpContextContract) {
    var tva:Tva|null = new Tva();
    if (request.all().tva_id) {
      tva = await Tva.find(request.all().tva_id);
    }
    tva?.merge(await request.validate(TvaValidator)).save();
    session.flash({
      success: "Le tva est bien sauvegardé",
    });
    response.redirect().toRoute("tva_list");
  }

  /**
   *
   *
   * @param {HttpContextContract} {view}
   * @returns
   *
   * @memberOf PaymentModsController
   */
  async listModePaiement({ view }: HttpContextContract) {
    let payments = await ModePaiement.all();
    return view.render("params/listModPaiement", {
      payments: payments,
    });
  }

  /**
   *
   *
   * @param {HttpContextContract} {view}
   * @returns
   *
   * @memberOf PaymentModsController
   */
  async listTva({ view }: HttpContextContract) {
    let tvas = await Tva.all();
    return view.render("params/tvalist", {
      tvas: tvas,
    });
  }

  /**
   *
   *
   * @param {HttpContextContract} {view}
   * @returns
   *
   * @memberOf PaymentModsController
   */
  async editTva({ view, params }: HttpContextContract) {
    let tva:Tva|null = new Tva();
    if (params.id) {
      tva = await Tva.find(params.id);
    }

    return view.render("params/tva", {
      tva: tva,
    });
  }

  async getursaff({view}: HttpContextContract) {
      return view.render('params/ursaff');
  }

 async saveUrsaf ({request, response, session}: HttpContextContract) {
  let ursaff:Ursaff|null = new Ursaff();
  if (request.all().tva_id) {
    ursaff = await Tva.find(request.all().tva_id);
  }
  tva?.merge(await request.validate(TvaValidator)).save();
  session.flash({
    success: "Le tva est bien sauvegardé",
  });
  response.redirect().toRoute("tva_list");
 }

}
