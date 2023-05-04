import apiSlice from "../api/apiSlice";


export const gymServiceApi = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        getGymServices : builder.query({
            query : () => 'https://raw.githubusercontent.com/shafik720/rest-api/main/Gym%20care%20Website/Gym-services.json'
        })
    })
})

export const{useGetGymServicesQuery} = gymServiceApi ; 