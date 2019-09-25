'use strict'

// const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const onGetItems = (event) => {
  event.preventDefault()
  api.getItems()
    .then(ui.getItemsSuccess)
    .catch(console.error)
}

const onDeleteItem = (event) => {
  event.preventDefault()
  // Should get an id of the resourse that was targeted. At least did it in my other project.
  const id = $(event.target).closest('section').data('id')
  api.deleteItem(id)
  .then(ui.deleteItemSuccess)
  .catch(console.error)
}

module.exports = {
  onGetItems
}
