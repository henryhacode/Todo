const data = [];
let seq = 1;

const getAll = () => {
  return data;
}

const getById = (id) => {
  const pos = data.findIndex(item => item.id == id);
  if (pos != -1) {
    return data[pos];
  }
  return null;
}

const add = (item) => {
  item["id"] = seq++;
  data.push(item);
  return item;
}

const deleteById = (id) => {
  const pos = data.findIndex(item => item.id == id);
  if (pos != -1) {
    const ret = data[pos];
    data.splice(pos, 1);
    return ret;
  }

  return null;
}

module.exports = { getAll, getById, add, deleteById };
