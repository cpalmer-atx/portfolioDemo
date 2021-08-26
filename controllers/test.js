// Reminder: import any models here

// @route     GET api/test
// @desc      Sanity test to check all basic connections
// @access    Public

exports.getTest = (req, res) => {
  return res.status(200).json({ msg: "Sanity check passed!" });
};