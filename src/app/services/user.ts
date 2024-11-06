import { api } from "../baseApi";



export const userApi = api.injectEndpoints({
    endpoints: (build)=> ({
        login: build.mutation({
            query: (payload)=> ({
                url:'user/login',
                method: 'POST',
                body: payload
            })
        }),
        signup: build.mutation({
            query: (payload)=> ({
                url: 'user/signup',
                method: 'POST',
                body: payload
            })
        })
    }),
    overrideExisting: false
})

export const {useLoginMutation, useSignupMutation} = userApi