class Users {

    constructor(){
        this._apiBase = `https://jsonplaceholder.typicode.com/`
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`)

        if(!res.ok){
            throw new Error(`not fetch ${url}, status ${res.status}`)
        }

        return await res.json()

    }

    getAllUsers = async () => {
        const res = await this.getResource(`users/`)
        return res
    }

    getUserId = async (id) => {
        const res = await this.getResource(`users/${id}`)
        return res
    }

    getAllPosts = async () => {
        const res = await this.getResource(`posts/`)
        return res
    }


}
export default Users

