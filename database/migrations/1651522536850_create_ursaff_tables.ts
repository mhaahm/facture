import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CreateUrsaffTables extends BaseSchema {
  protected tableName = 'ursaff'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
      table.string('ursaff_frequency',54)
      table.string('mode_calcule',54)
      table.string('couleur1',54)
      table.string('couleur2',54)
      table.string('couleur3',54)
      table.text('devis_droite')
      table.text('devis_centre')
      table.text('devis_gauche')
      table.text('facture_droite')
      table.text('facture_centre')
      table.text('facture_gauche')

    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
