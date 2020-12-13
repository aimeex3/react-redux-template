export const selectSortedUserIds = state => state.users.sortedUserIds;
export const selectUser = (state, id) => state.users.userMap[id];
