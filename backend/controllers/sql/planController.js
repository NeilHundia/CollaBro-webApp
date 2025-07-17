const { PrismaClient } = require('../../config/prisma');

exports.createPlan = async (req, res) => {
  try {
    const plan = await prisma.plan.create({ data: req.body });
    res.status(201).json(plan);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllPlans = async (req, res) => {
  try {
    const plans = await prisma.plan.findMany();
    res.json(plans);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPlanById = async (req, res) => {
  try {
    const plan = await prisma.plan.findUnique({ where: { id: Number(req.params.id) } });
    if (!plan) return res.status(404).json({ error: 'Plan not found' });
    res.json(plan);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updatePlan = async (req, res) => {
  try {
    const plan = await prisma.plan.update({ where: { id: Number(req.params.id) }, data: req.body });
    res.json(plan);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deletePlan = async (req, res) => {
  try {
    await prisma.plan.delete({ where: { id: Number(req.params.id) } });
    res.json({ message: 'Plan deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}; 