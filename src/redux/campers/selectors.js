export function selectCampers(state) {
  return state.campers.items;
}

export function selectCampersLoading(state) {
  return state.campers.loading;
}

export function selectCampersError(state) {
  return state.campers.error;
}

export function selectFavorite(state) {
  return state.campers.favorite;
}

export function selectPage(state) {
  return state.campers.page;
}

export function selectMore(state) {
  return state.campers.more;
}
