'use strict';


module.exports = {
  renderServerError(req, res) {
    res.status(403).json({
      error: 'an error occured'
    });
  }
};
