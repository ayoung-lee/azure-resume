// add counter function to display the number of visitors to the website

window.addEventListener('DOMContentLoaded', event => {
  getVisitCount();
});

const functionApi = '';

const getVisitCount = () => {
  count = 20;
  fetch(functionApi)
    .then(response => {
      return response.json();
    })
    .then(response => {
      console.logP('Website called function API.');
      count = response.count;
      document.getElementById('counter').innerText = count;
    })
    .catch(function (error) {
      console.log(error);
    });
  return count;
};
