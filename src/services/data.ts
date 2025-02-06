
export default {
    getUsers(succes:any, error:any) {

        fetch('client-api/v2/transactions')
            .then(response => response.json())
            .then(
            (response) => {
                console.log('Service Response', response)
                succes(response)
            },
            (response) => {
                error(response)
            }
        )
    },
}