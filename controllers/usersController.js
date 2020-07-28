const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");




const db = require("../models");

// Defining methods for the booksController
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

  create: function (req, res) {
    db.User.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  //   update: function(req, res) {
  //     db.Book
  //       .findOneAndUpdate({ _id: req.params.id }, req.body)
  //       .then(dbModel => res.json(dbModel))
  //       .catch(err => res.status(422).json(err));
  //   },
  remove: function (req, res) {
    db.Project.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
