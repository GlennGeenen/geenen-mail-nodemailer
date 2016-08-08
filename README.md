# Geenen Mail NodeMailer service

This is a geenen-mail service for sending emails with NodeMailer.

## Install

```
npm i geenen-mail-nodemailer --save
```

## Options

https://github.com/nodemailer/nodemailer

## Example

This example uses the geenen-mail-nodemailer service.

```
server.register({
  register: require('geenen-mail'),
  options: {
    service: require('geenen-mail-nodemailer'),
    options: {
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: user@gmail.com,
        pass: password
      }
    }, // Options from the service
    path: `${__dirname}/../templates`, // Required, templates directory
    route: {
      path: '/my/mail/path', // Default /mail
      cors: true, // Default false
      auth: 'myAuth' // Default none
    }, // Optional, will add route to server when defined
    from: 'Glenn Geenen <glenn@geenentijd.be>' // Required, from fallback
    templates: [{
      name: 'contact', // Required, should be name of the hbs file
      subject: 'Contact Form', // Required, subject fallback
      schema: Joi.object({
        message: Joi.string().required()
      }), // Optional, joi validation schema
    }]
  }
});
```
