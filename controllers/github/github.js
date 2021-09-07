const axios = require('axios');

// Imported keys
const { clientID, secret } = {
  clientID: process.env.GIT_CID,
  secret: process.env.GIT_SEC
};

// @route     GET api/github/:username
// @desc      Get specified github user profile
// @access    Public
exports.getProfile = async (req, res) => {
  // res.status(200).send({ msg: 'Boom!' });
  try {
    const endpoint = `https://api.github.com/users/${req.query.username}?client_id=${clientID}&client_secret=${secret}`;
    const headers = { 'user-agent': 'node.js' };

    const roadster = await axios.get(endpoint, headers);
    // console.log(roadster.data);
    
    // return res.status(200).json(roadster.data.earth_distance_mi);
    return res.status(200).json(roadster.data);
  } catch (error) {
    // console.error(error);
    res.status(500).send('Server Error');
  }
};