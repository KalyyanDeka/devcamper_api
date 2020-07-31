const Bootcamp = require('../models/Bootcamp');

// @desc       Get all bootcamps
// @routes     GET /api/v1/bootcamps
// @access     Public
exports.getBootcamps = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: 'Show all bootcamps', hello: req.hello });
};

// @desc       Get single bootcamp
// @routes     GET /api/v1/bootcamps/:id
// @access     Public
exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `show bootcamp ${req.params.id}` });
};

// @desc       Create new bootcamp
// @routes     POST /api/v1/bootcamps
// @access     Private
exports.createBootcamp = async (req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body);

  res.status(201).json({
    success: true,
    data: bootcamp,
  });
};

// @desc       Update bootcamp
// @routes     PUT /api/v1/bootcamps/:id
// @access     Private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `update bootcamp ${req.params.id}` });
};

// @desc     Delete bootcamp
// @routes     POST /api/v1/bootcamps/:id
// @access     Private
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `delete bootcamp ${req.params.id}` });
};
