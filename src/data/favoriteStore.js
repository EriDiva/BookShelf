export let favoriteIds = [];

export const toggleFavoriteGlobal = (id) => {
  if (favoriteIds.includes(id)) {
    favoriteIds = favoriteIds.filter((item) => item !== id);
  } else {
    favoriteIds.push(id);
  }
};