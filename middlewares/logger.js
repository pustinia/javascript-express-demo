const logger = function (req, res, next) {
  console.log(req.url, '==> from logger middleware');
  next();
};

module.exports = logger;

// using another way.
// const {logger} = require('/logger');
/*
exports.logger = (req,res,next) => {
    console.log(req.url, '.. from logger middleware');
    next(); // next 가 필요하다..
};
*/
