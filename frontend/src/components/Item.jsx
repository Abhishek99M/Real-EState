import React from 'react'
import PropTypes from 'prop-types'
import { MdOutlineBathroom, MdOutlineBed, MdOutlineGarage, } from 'react-icons/md'
import { CgRuler } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom'
import HeartBtn from './HeartBtn'

const Item = ({property}) => {
    const navigate = useNavigate()
  return (
    <div onClick={() =>navigate(`../listing/${property.id}`)} className='rounded-lg bg-white overflow-hidden ring-1 ring-slate-900/5 '>
        {/* IMAGE */}
        <div className='relative'>
             
            <img src={property.image} alt={property.title} className='h-[13rem] w-full aspect-square object-cover'/>
            <div className='absolute top-8 right-4'>
                <HeartBtn id={property.id}/>
            </div>
        </div>
        {/* INFO */}
        <div className='!m-3'>
            <div className='flexBetween'>
                <h5 className='font-bold my-1 text-lime-400'>{property.city}</h5>
                <h4 className='h4'>${property.price}</h4>
            </div>
            <h4 className='text-[18px] font-medium line-clamp-1'>{property.title}</h4>
            <div className='flex gap-x-2 py-2'>
                <div className='flexCenter gap-x-2 border-r border-slate-900 !pr-4 font-[500]'>
                    <MdOutlineBed /> {property.facilities.bedrooms}
                </div>
                <div className='flexCenter gap-x-2 border-r border-slate-900 !pr-4 font-[500]'>
                    <MdOutlineBathroom /> {property.facilities.bathrooms}
                </div>
                <div className='flexCenter gap-x-2 border-r border-slate-900 !pr-4 font-[500]'>
                    <MdOutlineGarage /> {property.facilities.parkings}
                </div>
                <div className='flexCenter gap-x-2 border-r border-slate-900 !pr-4 font-[500]'>
                    <CgRuler /> 400
                </div>
            </div>
            <p className='pt-2 mb-4 line-clamp-2 font-bold text-gray-700'>{property.description}</p>
        </div>

    </div>
  )
}
Item.propTypes = {
    property: PropTypes.shape({
        id: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        facilities: PropTypes.shape({
            bedrooms: PropTypes.number.isRequired,
            bathrooms: PropTypes.number.isRequired,
            parkings: PropTypes.number.isRequired,
        }).isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
}

export default Item

