// Select relevant DOM elements.
const mainCol = document.getElementById('main-col');
const createBugBtn = document.getElementById('root-button');

// When button is clicked, render Bugs creation form.
createBugBtn.addEventListener('click', () => {
  console.log('bug button clicked');

  // Create new DOM elements.
  const formDiv = document.createElement('div');
  const problemInpt = document.createElement('input');
  const errorTextInpt = document.createElement('input');
  const commitInpt = document.createElement('input');
  const submitBtn = document.createElement('button');
  const featuresCol = document.getElementById('features-col');

  // Create array to store DOM elements;
  const domElements = [problemInpt, errorTextInpt, commitInpt, submitBtn];
  const placeholderText = ['problem', 'error', 'commit', 'submit'];

  for (let i = 0; i < domElements.length; i += 1) {
    domElements[i].classList.add('form-control', 'my-3');
    // eslint-disable-next-line max-len
    domElements[i].placeholder = placeholderText[i].charAt(0).toUpperCase() + placeholderText[i].substr(1);
    domElements[i].name = placeholderText[i];
    formDiv.appendChild(domElements[i]);
  }

  // Add styling.
  formDiv.classList.add('borders', 'mt-4', 'px-5');
  submitBtn.classList.add('btn', 'btn-secondary');
  submitBtn.innerText = 'Submit';

  // Create new DOM elements.
  const featuresDiv = document.createElement('div');
  const featuresHeader = document.createElement('h3');
  featuresHeader.innerText = 'Select One Feature';
  featuresDiv.appendChild(featuresHeader);
  featuresDiv.classList.add('features', 'mt-4');
  // const featuresBtn = document.createElement('button');

  // Create event listener for featureBtn.
  let featureChosen = false;

  // Get All Features.
  axios
    .get('/features')
    .then((result) => {
      // Create buttons out of features from GET request.
      result.data.forEach((feature, index) => {
        const featureBtn = document.createElement('button');
        featureBtn.innerText = feature.name;
        featureBtn.name = feature.name;
        featureBtn.value = index;
        featureBtn.classList.add('btn', 'btn-sm', 'btn-info', 'mx-1');
        featuresDiv.appendChild(featureBtn);

        featureBtn.addEventListener('click', (e) => {
          if (featureChosen === false) {
            // console.log('Current', document.getElementsByClassName('btn-danger')[0]);
            featureBtn.classList.add('btn-danger');
            featureChosen = true;
          } else if (featureBtn.classList.contains('btn-danger') && featureChosen) {
            featureBtn.classList.remove('btn-danger');
            featureBtn.classList.add('btn-secondary');
            featureChosen = false;
          }
          console.log('EVENT', e.target);
        });
      });
    })
    .catch((err) => (console.log('Error', err)));

  // Add event to the button (this is within Bugs Creation form)
  submitBtn.addEventListener('click', async () => {
    const chosenBtn = document.body.getElementsByClassName('btn-danger')[0];

    try {
      const data = {
        problem: problemInpt.value,
        errorText: errorTextInpt.value,
        commit: commitInpt.value,
        featureId: chosenBtn.value,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      console.log('Data that is sent: ---', data);

      const result = await axios.post('/create', data);

      console.log('Here are the results.config.data!\n This is cus of res.send(newBug) in bugs.mjs: \n', result.config.data);

      if (result.config.data) {
        formDiv.remove();
      }
    } catch (err) {
      console.log('Erorr: ---', err);
    }
  });
  formDiv.appendChild(featuresDiv);
  mainCol.appendChild(formDiv);
});
