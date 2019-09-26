'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.failure)
}

const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.failure)
}

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.failure)
}

module.exports = {
  onSignOut,
  onSignIn,
  onSignUp,
  onChangePassword
}