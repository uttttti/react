const initialState = [];
const imageUrls = (state = initialState, action) => {
  switch(action.type) {
    case 'RECIEVE_DATA':
      return action.payload;
    default:
      return state;
  };
};

export default imageUrls;
