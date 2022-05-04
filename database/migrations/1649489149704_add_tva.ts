import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddTva extends BaseSchema {
  protected tableName = 'tva'

  public async up () {
    this.schema.createTableIfNotExists(this.tableName, (table) => {
      table.increments('id')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
      table.double('tva_pct');
    })
  }

  public async down () {
    this.schema.dropTableIfExists(this.tableName)
  }
}
