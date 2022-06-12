
export const login = (user) => {
    return { type: "LOGIN", value: user}
}
export const logOut = () => {
    return { type: "LOGOUT" }
}


export const addBusiness = (business) => {
    return { type: "ADD_BUSINESS", value: business}
}

export const removeBusiness = (index) => {
    return { type: "REMOVE_BUSINESS", value: index}
}