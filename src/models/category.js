export const categories = {
  state: {
    menu: [],
    menuRight: []
  },
  reducers: {
    getMenu(state, payload) {
      return {
        ...state,
        menu: payload,
      }
    },
    getMenuRight(state, payload) {
      return {
        ...state,
        menuRight: payload,
      }
    },
  },
  effects: (dispatch) => ({}),
}
