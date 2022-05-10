const { DNDY } = require('../models');

module.exports = {
  async createDNDY({ body }, res) {
    const DNDY = await DNDY.create(body);

    if (!DNDY) {
      return res.status(400).json({ message: 'Unable to create DNDY' });
    }

    res.status(200).json(DNDY);
  },
  
  async getAllDNDY(req, res) {
    const allDNDY = await Sample.find({});

    if (!allDNDY) {
      return res.status(400).json({ message: 'No DNDY found' });
    }

    res.status(200).json(allDNDY);
  },

  async getDNDYById({ params }, res) {
    const DNDY = await DNDY.findById(params.id);

    if (!DNDY) {
      return res.status(400).json({ message: 'No DNDY found by that id' });
    }

    res.status(200).json(DNDY);
  },
};
