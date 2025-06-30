const { PrismaClient } = require('../../config/prisma');

exports.createSubscription = async (req, res) => {
  try {
    const subscription = await prisma.userSubscription.create({ data: req.body });
    res.status(201).json(subscription);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllSubscriptions = async (req, res) => {
  try {
    const subscriptions = await prisma.userSubscription.findMany();
    res.json(subscriptions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getSubscriptionById = async (req, res) => {
  try {
    const subscription = await prisma.userSubscription.findUnique({ where: { id: Number(req.params.id) } });
    if (!subscription) return res.status(404).json({ error: 'Subscription not found' });
    res.json(subscription);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateSubscription = async (req, res) => {
  try {
    const subscription = await prisma.userSubscription.update({ where: { id: Number(req.params.id) }, data: req.body });
    res.json(subscription);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteSubscription = async (req, res) => {
  try {
    await prisma.userSubscription.delete({ where: { id: Number(req.params.id) } });
    res.json({ message: 'Subscription deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
