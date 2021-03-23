export default function initBugsController(db) {
  const root = (req, res) => {
    res.render('root');
  };

  const create = async (req, res) => {
    try {
      console.log('req.body', req.body);

      // Insert into database first.
      await db.Bug.create(req.body);

      // Find what was just inserted & then send back in the form of JSON in the POST request below.
      const newBug = db.Bug.findOne({
        where:
        { problem: req.body.problem },
      });

      console.log('new Bug: ---', newBug);
      res.send(newBug);
    } catch (err) {
      console.log('Error: ---\n', err);
    }
  };

  return { root, create };
}
