const { PrismaClient } = require('../../config/prisma');

exports.createCommunity = async (req, res) => {
  try {
    const community = await prisma.community.create({ data: req.body });
    res.status(201).json(community);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllCommunities = async (req, res) => {
  try {
    const communities = await prisma.community.findMany();
    res.json(communities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCommunityById = async (req, res) => {
  try {
    const community = await prisma.community.findUnique({ where: { id: Number(req.params.id) } });
    if (!community) return res.status(404).json({ error: 'Community not found' });
    res.json(community);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateCommunity = async (req, res) => {
  try {
    const community = await prisma.community.update({ where: { id: Number(req.params.id) }, data: req.body });
    res.json(community);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteCommunity = async (req, res) => {
  try {
    await prisma.community.delete({ where: { id: Number(req.params.id) } });
    res.json({ message: 'Community deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}; 