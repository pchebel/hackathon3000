/**
 * Actions definition
 */
const USER_IDENTIFIED = "USER_IDENTIFIED"

const userHasIdentified = user => {return {type:USER_IDENTIFIED, user:user}}

export {USER_IDENTIFIED,userHasIdentified}
