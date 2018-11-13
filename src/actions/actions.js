export const t = {
    GET_ITEMS_SUCCESS: "GET_ITEMS_SUCCESS",
    ADD_ITEM_TO_SHOPPING_CART: "ADD_ITEM_TO_SHOPPING_CART",
    REMOVE_ITEM_FROM_SHOPPING_CART: "REMOVE_ITEM_FROM_SHOPPING_CART",
    SELECT_CATEGORY: "SELECT_CATEGORY",
}

export const actions = {
    getItemsSuccess: items => ({
        type: t.GET_ITEMS_SUCCESS,
        items
    }),

    addItemToShoppingCart: item => ({
        type: t.ADD_ITEM_TO_SHOPPING_CART,
        item
    }),

    removeItemFromShoppingCart: item => ({
        type: t.REMOVE_ITEM_FROM_SHOPPING_CART,
        item
    }),

    selectCategory: category => ({
        type: t.SELECT_CATEGORY,
        category
    })
}