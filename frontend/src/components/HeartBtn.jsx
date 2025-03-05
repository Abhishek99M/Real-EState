import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { FaHeart } from 'react-icons/fa'
import userAuthCheck from '../hooks/userAuthCheck'
import UserDetailContext from '../context/UserDetailContext'
import { useMutation } from '@tanstack/react-query'
import { toFav } from '../utils/api'
import { useAuth0 } from '@auth0/auth0-react'
import { checkFavourites, updateFavourites } from '../utils/comman'

const HeartBtn = ({ id }) => {

    const [heartColor, setHeartColor] = useState("white")
    const { validateLogin } = userAuthCheck()
    const { user } = useAuth0()
    const { userDetails: { token, favourites }, setUserDetails } = useContext(UserDetailContext)

    

    const { mutate } = useMutation({
        mutationFn: () => toFav(id, user?.email, token),
        onSuccess: () => {
            setUserDetails((prev) => ({
                ...prev,
                favourites: updateFavourites(id, prev.favourites)
            }))
        }
    })

    const handleLike = () => {
        if (validateLogin()) {
            mutate()
            setHeartColor((prev) => prev === "#8ac243" ? "white" : "#8ac243")
        }
    }

    useEffect(() => {
        setHeartColor(() => checkFavourites(id, favourites))
    }, [favourites, id])

    return (
        <FaHeart 
            onClick={(e) => {
                e.stopPropagation()
                handleLike()
            }}
            color={heartColor}
            size={23} 
            className='cursor-pointer drop-shadow-sm'   
        />
    )
}
HeartBtn.propTypes = {
    id: PropTypes.string.isRequired,
}

export default HeartBtn
