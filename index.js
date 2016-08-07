'use strict';

let transport;

const configure = function (options, callback) {

  // Options: https://github.com/nodemailer/nodemailer

  // Only load for setup
  const Nodemailer = require('nodemailer');
  transport = Nodemailer.createTransport(options.options);
  callback();
};

const sendMail = function (data, next) {

  const emailOptions = {
    from: data.from,
    to: data.recipients.toString(),
    subject: data.subject,
    text: data.text,
    html: data.html
  };

  return transport.sendMail(emailOptions, next);
};

module.exports = {
  configure,
  sendMail
};
