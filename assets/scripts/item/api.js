'use strict'

const config = require('../config.js')
const store = require('../store.js')

const getItems = function () {
  return $.ajax({
    url: config.apiUrl + '/items',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteItem = (itemId) => {
  return $.ajax({
    url: config.apiUrl + `/items/${itemId}`,
    method: 'DELETE',
    headers: {
      // We use bearer. Syntax?
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

module.exports = {
  getItems,
  deleteItem
}
