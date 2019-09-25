'use strict'

// const store = require('../store')

const getItemsSuccess = (data) => {
  $('.content').html('')
  $('form').trigger('reset')
}

const deleteItemSuccess = () => {
  console.log('Deleted')
}

module.exports = {
  getItemsSuccess,
  deleteItemSuccess
}
