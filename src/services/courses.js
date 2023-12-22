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
        getCourse: build.query({
            query: (id) => ({
                url: `courses/${id}.json`,
            }),
        }),
    }),
})

export const { useGetCoursesQuery, useGetCourseQuery } = coursesQuery
