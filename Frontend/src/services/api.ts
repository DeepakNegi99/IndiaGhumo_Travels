import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { type Package } from "../../features/packages/types";

export const api = createApi({
  reducerPath: "api",
  // baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:5000"}),
  // replace baseQuery temporarily
  baseQuery: async () => {
    return {
      data: [
        {
          id: 1,
          title: "Manali Adventure",
          location: "Himachal",
          price: 15000,
          duration: "5 Days",
          imageUrl: "https://source.unsplash.com/400x300/?manali",
          description: "Snow, mountains, adventure sports",
        },
        {
          id: 2,
          title: "Rishikesh Retreat",
          location: "Uttarakhand",
          price: 12000,
          duration: "4 Days",
          imageUrl: "https://source.unsplash.com/400x300/?rishikesh",
          description: "River rafting and yoga retreat",
        },
      ],
    };
  },
  endpoints: (builder) => ({
    getPackage: builder.query<Package[], void>({
      query: () => "/package",
    }),

    getPackageById: builder.query<Package, string>({
      query: (id) => `/packages/${id}`,
    }),
  }),
});

export const { useGetPackageQuery, useGetPackageByIdQuery } = api;
