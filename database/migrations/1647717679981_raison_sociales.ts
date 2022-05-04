import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class RaisonSociales extends BaseSchema {
  protected tableName = 'raison_sociales'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.string('adresse1')
      table.string('adresse2')
      table.string('code_postal')
      table.string('adresse_ville')
      table.string('telephone')
      table.string('website')
      table.string('title')
      table.string('mail')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
