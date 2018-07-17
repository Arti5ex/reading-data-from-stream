export default function reducer (state = {
  data: [],
}, action) {
  switch (action.type) {
    case 'FETCH_DATA': {

      let newArray = [...state.data];
      
      if (Array.isArray(action.payload)) {
        action.payload.forEach((item) => {
          let requiredIndex = state.data.map(p => p._id).indexOf(item._id);

          if ( requiredIndex !== -1 ) {
            newArray[requiredIndex] = item;
          } else {
            newArray.push(item);
          }
        });
      }

      return {
        ...state,
        data: newArray
      }
    }
  }

  return state
}
