export const addTodo = (data) => {
    return {
        type: 'Add_Todo',
        payload: {
            id: new Date().getTime().toString(),
            data: data,

        }
    }
}
export const deleteTodo = (data) => {
  return {
    type: "Add_Todo",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  }
}
export const removeTodo = (data) => {
  return {
    type: "Add_Todo",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    }
  }
}