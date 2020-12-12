export const categories = {
  state: {
    menu: [],
  },
  reducers: {
    getMenu(state, payload) {
      return {
        ...state,
        menu: payload,
      }
    },
  },
  effects: (dispatch) => ({}),
}
