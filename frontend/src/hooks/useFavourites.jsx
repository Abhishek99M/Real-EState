import React, { useContext, useEffect, useRef } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useQuery } from '@tanstack/react-query'
import { getAllFav } from '../utils/api'
import UserDetailContext from '../context/UserDetailContext'

const useFavourites = () => {
    const { userDetails, setUserDetails } = useContext(UserDetailContext)
    const queryRef = useRef()
    const { user } = useAuth0()

    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: ["allFavourites", user?.email],
        queryFn: () => user?.email && userDetails?.token 
                      ? getAllFav(user.email, userDetails.token) 
                      : Promise.resolve([]),
        onSuccess: (data) => setUserDetails((prev) => ({...prev, favourites: data})),
        enabled: !!user?.email && !!userDetails?.token, 
        staleTime: 30000,
    })


    useEffect(() => {
        queryRef.current && queryRef.current()
    }, [userDetails?.token])
    
    return { data, isError, isLoading, refetch }
}

export default useFavourites
