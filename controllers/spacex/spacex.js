const axios = require('axios');

// @route     GET api/spacex/roadster
// @desc      Get current roadster orbit data
// @access    Public
exports.roadster = async (req, res) => {
  try {
    const endpoint = 'https://api.spacexdata.com/v4/roadster';
    const headers = { 'user-agent': 'node.js' };

    const roadster = await axios.get(endpoint, headers);
    // console.log(roadster.data);
    
    // return res.status(200).json(roadster.data.earth_distance_mi);
    return res.status(200).json(roadster.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};


// @route     GET api/spacex/starlink
// @desc      Get all active starlink sats
// @access    Public
exports.satellites = async (req, res) => {
  try {
    const endpoint = 'https://api.spacexdata.com/v4/starlink';
    const headers = { 'user-agent': 'node.js' };

    const allSats = await axios.get(endpoint, headers);
    const activeSats = allSats.data.filter(sat => sat.spaceTrack.DECAYED === 0);

    console.log(`Satellite count: ${allSats.data.length}`);
    console.log(`Active sat count: ${activeSats.length}`);

    return res.status(200).json(activeSats);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};