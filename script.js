const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject('could not fetch the data');
      }
    });
    request.open('GET', resource);
    request.send();
  });
};

getTodos('todos/krishna.json')
  .then((data) => {
    console.log(data);
    return getTodos('todos/milan.json');
  })
  .then((data) => {
    console.log(data);
    return getTodos('todos/lemon.json');
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
