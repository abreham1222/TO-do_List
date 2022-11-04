const clearTask = (index, list) => {
  if (list.length === 0) return;
  const fil = list[index];
  list.filter((item) => item === fil);

  document.querySelector(`#task-${index}`).parentNode.parentNode.remove();
  localStorage.setItem('tasks', JSON.stringify(list));
};

export default clearTask;