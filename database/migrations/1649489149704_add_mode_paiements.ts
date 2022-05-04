import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddModePaiements extends BaseSchema {
  protected tableName = 'mode_paiements'

  public async up () {
    this.schema.createTableIfNotExists(this.tableName, (table) => {
      table.increments('id')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
      table.string('mode_paiement_label');
    })
  }

  public async down () {
    this.schema.dropTableIfExists(this.tableName)
  }
}
