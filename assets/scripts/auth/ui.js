'use strict'
const changePwTemplate = require('../templates/change-pw.handlebars')
const navBarForm = require('./../templates/navbar.handlebars')
const signInForm = require('./../templates/auth.handlebars')

const signOutSuccess = function () {
  console.log('Signed out')
  $('.main').html(signInForm())
  $('nav').html('')
}

const signInSuccess = function () {
  console.log('Signed in')
  $('.main').html(navBarForm)
}

const signUpSuccess = function () {
  console.log('Signed Up!!!')
}

const signUpFailure = function () {
  console.log('Sign Up Failed :(')
}

const changePasswordSuccess = function (data) {
  console.log('Password Changed')
}

const failure = function () {
  console.log('Fail!!!!!')
}

const goChangePassword = () => {
  $('.main').html('')
  $('.main').html(changePwTemplate())
}
module.exports = {
  signOutSuccess,
  signInSuccess,
  failure,
  signUpFailure,
  signUpSuccess,
  changePasswordSuccess,
  goChangePassword
}
