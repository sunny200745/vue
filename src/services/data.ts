
export default {
    transactionsList : null,
    getUsers(success:any, error:any) {

        fetch('client-api/v2/transactions')
            .then(response => response.json())
            .then(
            (response) => {
                console.log('Service Response', response)
                success(response)
                this.transactionsList = response
            },
            (response) => {
                error(response)
            }
        )
    },
    getTransList(){
        console.log('getTransList', this.transactionsList)
        return this.transactionsList;
    }


    
}