import db from './models/index.mjs';
import initBugsController from './controllers/bugs.mjs';
import initFeaturesController from './controllers/features.mjs';

export default function bindRoutes(app) {
  const BugsController = initBugsController(db);
  const FeaturesController = initFeaturesController(db);

  app.get('/', BugsController.root);
  app.post('/create', BugsController.create);
  app.get('/features', FeaturesController.features);
}
