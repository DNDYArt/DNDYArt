const { Artist } = require('../models'),
bycrypt = require('bcrypt');

module.exports = {
  async verifyArtistLogin(req, res) {
    try {
      const verif = await Artist.findOne({email: req.body.email})
      if (!verif) {
        res.status(400).json();
      }
      const validPassword = bycrypt.compareSync(req.body.password, verif.password);

      if (!validPassword) {
        res.status(400).json();
        return;
      }

      res.status(200).json(verif);
    } catch (err) {
      console.error(err);
      res.status(500).json(err)
    }
  },

  async createArtist(req, res) {
    try {
      const user = await Artist.create( req.body );
  
      if (!user) {
        return res.status(400).json({ message: 'Unable to create Artist' });
      }
  
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err)
    }
  },
  
  async getAllArtists(req, res) {
    const allDNDY = await Artist.find({});

    if (!allDNDY) {
      return res.status(400).json({ message: 'No DNDY found' });
    }

    res.status(200).json(allDNDY);
  },

  async getDNDYById({ params }, res) {
    const DNDY = await Artist.findById(params.id);

    if (!DNDY) {
      return res.status(400).json({ message: 'No DNDY found by that id' });
    }

    res.status(200).json(DNDY);
  },
};
