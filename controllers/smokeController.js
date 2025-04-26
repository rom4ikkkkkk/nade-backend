let smokes = [];

function addSmoke(req, res) {
  const { title, position } = req.body;
  smokes.push({ title, position });
  res.status(200).json({ message: 'Smoke added' });
}

function getSmokes(req, res) {
  res.status(200).json(smokes);
}

module.exports = { addSmoke, getSmokes };
