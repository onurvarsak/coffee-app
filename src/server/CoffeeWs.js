import coffees from '../client/mock/coffees.json'

export const getCoffees = () => {
    return new Promise((res, rej) => {
        return res(coffees)
    })
}