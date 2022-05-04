import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Ursaff extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public ursaff_frequency: string

  @column()
  public mode_calcule:string

  @column()
  public couleur1: string

  @column()
  public couleur2: string

  @column()
  public couleur3: string

  @column()
  public devis_droite: string

  @column()
  public devis_center: string

  @column()
  public devis_gauche: string

  @column()
  public facture_droite: string

  @column()
  public facture_center: string

  @column()
  public facture_gauche: string




}
