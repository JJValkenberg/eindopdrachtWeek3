//ENDPOINT
const endpointTasks =
  "https://wincacademydatabase.firebaseio.com/jonathan/tasks.json";

// GET method om de data van database te verkrijgen
const getToDo = async () => {
  try {
    const response = await fetch(endpointTasks, { method: "GET" });
    const data = await response.json();
    //console.log("de opgehaalde dat", data); nog niet omgezet en leesbaar
    let tasks = Object.keys(data).map((key) => ({
      id: key,
      description: data[key].description,
      done: data[key].done,
    }));
    // console.log("After the tasks array", tasks);
    return tasks;
  } catch (error) {
    console.log(error);
  }
};
//POST method om data op database te krijgen
const postToDo = async (todo) => {
  const body = { description: todo, done: false };
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
  await fetch(endpointTasks, options)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
