import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const coursesQuery = createApi({
    reducerPath: 'coursesQuery',
    tagTypes: ['Courses'],

    baseQuery: fetchBaseQuery({
        baseUrl:
            'https://fitness-pro-19d0d-default-rtdb.europe-west1.firebasedatabase.app/',
    }),

    endpoints: (build) => ({
        getCourses: build.query({
            query: () => ({
                 url: 'courses.json',
            }),
        }),
        getWorkouts: build.query({
            query: () => ({
                url: 'workouts.json',
            }),
        }),
    }),
})

export const { useGetCoursesQuery, useGetWorkoutsQuery } = coursesQuery
