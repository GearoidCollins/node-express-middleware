'use strict';

const axios = require('axios');
const path = require('path');

const config = require(path.resolve('./config/config'));

module.exports = {
  all(req, res, next) {
    // axios.get('<URL>')
    // .then(({ data }) => {
    //   res.data = data;
    // });
    next();
  },
  single(req, res) {
    res.send({
      error: 'an error occured'
    });
  }
};
