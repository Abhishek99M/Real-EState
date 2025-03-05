import React, { useContext, useEffect, useRef } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useQuery } from '@tanstack/react-query'
import { getAllBookings } from '../utils/api'
import UserDetailContext from '../context/UserDetailContext'

const useBookings = () => {

    const {userDetails, setUserDetails} = useContext(UserDetailContext)
    const queryRef = useRef()
    const { user } = useAuth0()

    const{data, isLoading, isError, refetch} = useQuery({
        queryKey: ["allBookings"],
        queryFn: () => user?.email && userDetails?.token 
                      ? getAllBookings(user.email, userDetails.token) 
                      : Promise.resolve([]),
        onSuccess: (data) => setUserDetails((prev) => ({...prev, bookings: data})),
        enabled: !!user?.email && !!userDetails?.token,
        staleTime: 30000,
    })

    queryRef.current = refetch

    useEffect(() => {
        queryRef.current && queryRef.current()
    }, [userDetails?.token])
    
  return { data, isError, isLoading, refetch}
    
}

export default useBookings
