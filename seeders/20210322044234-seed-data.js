module.exports = {
  up: async (queryInterface) => {
    const featuresData = [
      {
        name: 'Navbar',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Submit button',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'POST request route',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'EJS rendering',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    await queryInterface.bulkInsert('features', featuresData);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('featues', null, {});
  },
};
