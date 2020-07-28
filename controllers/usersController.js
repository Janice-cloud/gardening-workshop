const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const validateRegisterInput = require("../validation/register");
//const validateLoginInput = require("../../validation/login");


const db = require("../models");

// Defining methods for the UserController
module.exports = {
  findAll: function (req, res) {
    db.User.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  //   findById: function(req, res) {
  //     db.Book
  //       .findById(req.params.id)
  //       .then(dbModel => res.json(dbModel))
  //       .catch(err => res.status(422).json(err));
  //   },

  login: function (req, res) {
    db.User.findOne({
      email: req.body.email,
    })
    .then(response =>  {
                    if (response) {
                        if (bcrypt.compareSync(req.body.password, response.password)) {
                            const payload = {
                                _id: response._id,
                                first_name: response.first_name,
                                last_name: response.last_name,
                                email: response.email
                            }
                            let token = jwt.sign(payload, process.env.SECRET_KEY, {
                                // 1 year in seconds
                                expiresIn: 31556926 
                            })
                            res.send(token)
                        }
                        else {
                            res.status(400).json({ error: "User does not exist" });
                        }
                    }
                    else {
                        res.status(400).json({ error: "User does not exist" });
                    }
                })
                .catch(err => {
                    res.send('error: ' + err);
                 }) 
  },

  register: function (req, res) {
     // Form validation
     const { errors, isValid } = validateRegisterInput(req.body);

     // Check validation
     if (!isValid) {
         return res.status(400).json(errors);
    }
    
    db.User.findOne({
         email: req.body.email
         })
         .then( response => {
                    if (response) {
                        res.status(400).json({ email: "Email already exists" });
                        return res.send("Email already exists");
                    }
                    else {
                        const today = new Date()
                        const userData = {
                            first_name: req.body.first_name,
                            last_name: req.body.last_name,
                            email: req.body.email,
                            password: req.body.password,
                            created: today
                        }
                        bcrypt.hash(req.body.password, 10, (err, hash) => {
                            if (err) throw err;
                            userData.password = hash
                            db.User.create(userData)
                            .then(user => {
                                res.json(user);
                            })
                            .catch(err => {
                                console.log(err);
                            })
                        })
                    }
                })
            },


    displayusers: function (req, res) {
        db.User.find()
                 .then(response => {
                     if (response) {
                         res.json(response)
                     }
                     else {
                         res.status(400).json({ error: "Users do not exist" });
                     }
                 })
                 .catch(err => {
                     res.send('error: ' + err);
                 })
    }
            
  //   update: function(req, res) {
  //     db.Book
  //       .findOneAndUpdate({ _id: req.params.id }, req.body)
  //       .then(dbModel => res.json(dbModel))
  //       .catch(err => res.status(422).json(err));
  //   },
//   remove: function (req, res) {
//     db.Project.findById({ _id: req.params.id })
//       .then((dbModel) => dbModel.remove())
//       .then((dbModel) => res.json(dbModel))
//       .catch((err) => res.status(422).json(err));
//   },
};
