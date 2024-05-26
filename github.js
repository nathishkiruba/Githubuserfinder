class Github{

    constructor(){
        this.client_id = "80f18379884b71f92f33";
        this.client_secret = "84705336a2d759b19bd0fb6d7c163873730c55b9";
    }

    async getUser(user){

        const profileResponse = await 
        fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        
        return {
            profile
        }
        

    }

}