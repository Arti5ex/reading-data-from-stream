export default function reducer (state = {
  data: [],
}, action) {
  switch (action.type) {
    case 'FETCH_DATA': {
      // console.log(state.data.concat(action.payload));
      return {
        ...state,
        data: state.data.concat(action.payload)
      }
    }
  }

  return state
}
