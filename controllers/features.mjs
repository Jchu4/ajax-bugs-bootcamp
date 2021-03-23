export default function initFeaturesController(db) {
  const features = async (req, res) => {
    try {
      const getFeatures = await db.Feature.findAll();
      console.log('Get Features!: ---', getFeatures);

      res.send(getFeatures);
    } catch (err) {
      console.log(err);
    }
  };

  return { features };
}
