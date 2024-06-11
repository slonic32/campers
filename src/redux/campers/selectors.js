export function selectCampers(state) {
  return state.campers.items;
}

export function selectCampersLoading(state) {
  return state.campers.loading;
}

export function selectCampersError(state) {
  return state.campers.error;
}
