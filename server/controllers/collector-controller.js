const { Collector } = require('../models');

module.exports = {
  async createCollector(req, res) {
    const user = await Collector.create( req.body );

    if (!user) {
      return res.status(400).json({ message: 'Unable to create Collector' });
    }

    res.status(200).json(DNDY);
  },
  
  async getUsers(req, res) {
    const allDNDY = await Collector.find({});

    if (!allDNDY) {
      return res.status(400).json({ message: 'No DNDY found' });
    }

    res.status(200).json(allDNDY);
  },

  async getDNDYById({ params }, res) {
    const DNDY = await Collector.findById(params.id);

    if (!DNDY) {
      return res.status(400).json({ message: 'No DNDY found by that id' });
    }

    res.status(200).json(DNDY);
  },
};
