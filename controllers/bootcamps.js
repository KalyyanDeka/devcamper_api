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
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'create new bootcamps' });
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
