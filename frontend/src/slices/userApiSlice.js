/// userApiSlice.js
import { USER_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/login`,
                method:'POST',
                body: data,
            }),
        }),

        register: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}`,
                method:'POST',
                body: data,
            }),
        }),

        logout: builder.mutation({
            query: () => ({
                url: `${USER_URL}/logout`,
                method:'POST',
            }),
        }),
        profile: builder.mutation({
            query:(data) => ({
                url: `${USER_URL}/profile`,
                method:'PUT',
                body: data,
            }),
        }),
        getUsers: builder.query({
            query: () => ({
                url: USER_URL
            }),
            providesTags: ['Users'],
            keepUnusedData: 5 *60,
        }),
        deleteUser: builder.mutation({
            query: (userId) => ({
                url: `${USER_URL}/${userId}`,
                method: 'DELETE',
            }),
        }),
        getUserDetails: builder.query({
            query: (userId) => ({
                url: `${USER_URL}/${userId}`,
            }),
            keepUnusedDataFor: 5,
        }),
        updateUser: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/${data.userId}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags:[ 'Users'],
        })
    }),
});
 
export const { 
    useLoginMutation, 
    useLogoutMutation, 
    useRegisterMutation, 
    useProfileMutation,
    useGetUsersQuery, 
    useDeleteUserMutation,
    useGetUserDetailsQuery,
    useUpdateUserMutation,
} = usersApiSlice;
