import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class RaisonSociale extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public name: string;

  @column()
  public adresse1: string;

  @column()
  public adresse2: string;

  @column()
  public code_postal: string;

  @column()
  public adresse_ville: string;

  @column()
  public telephone: string;

  @column()
  public website: string;

  @column()
  public mail: string;

  @column()
  public title: string;

}
