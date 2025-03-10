export const updateFavourites = (id, favourites) => {
    if(favourites?.includes(id)) {
        return favourites.filter((resdId) => resdId!==id)
    } else {
        return [...favourites, id]
    }
}

export const checkFavourites = (id, favourites) => {
    return favourites?.includes(id) ? "#8ac243" : "white"
}

export const validateString = (value) => {
    return value?.length < 3 || value === null ? "Must have atleast 3 characters" : null;
}