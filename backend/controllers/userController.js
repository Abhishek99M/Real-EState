import asyncHandler from 'express-async-handler'
import { prisma } from '../config/prismaConfig.js'

// CONTROLLER FUNCTION FOR CREATING A USER
export const createUser = asyncHandler(async (req, res) => {
    console.log("Creating a user");

    let { email } = req.body;
    const userExists = await prisma.user.findUnique({where: {email}});   
    if (!userExists) {
        const user = await prisma.user.create({ data: req.body })
        res.send({
        message: "User registered successfully",
        user:user,
    })}
    else res.status(201).send({message: "User already registerd"}) 
});

// CONTROLLER FUNCTION FOR BOOK A RESIDENCY VISIT

export const bookVisit = asyncHandler(async (req, res) => {
    console.log("Booking a visit");
    const { id } = req.params;
    const { email, date } = req.body;

    try {
        const alreadyBook = await prisma.user.findUnique({
            where: {email: email},
            select: {bookedVisits: true}
        })
        if(alreadyBook.bookedVisits.some((visit) => visit.id===id)) {
            res.status(400).json({message: "This residency is already booked by you"})
        }
        else {
            await prisma.user.update({
                where: {email: email},
                data: {
                    bookedVisits: {push: {id, date}}
                }
            })
            res.send("Your visit booked successfully")
        }
    }
    catch (err) {
        throw new Error(err.message)
    }
});

// CONTROLLER FUNCTION FOR GETTING ALL BOOKINGS OF A USER
export const getAllBookings = asyncHandler(async (req, res) => {
    console.log("Getting all bookings for a user");
    const {email} = req.body
    try {
        const bookings = await prisma.user.findUnique({
            where: {email: email},
            select: {bookedVisits: true}
        })
        res.status(200).send(bookings)
    }
    catch(err) {
        throw new Error(err.message)
    }

});

// CONTROLLER FUNCTION FOR CANCELL A BOOKINGS OF A USER
export const cancelBooking = asyncHandler(async (req, res) => {
    console.log("Canceling a booking");
    const {email} = req.body
    const {id} = req.params
    try {
        const user = await prisma.user.findUnique({
            where: {email: email},
            select: {bookedVisits: true}
        })
        const index = user.bookedVisits.findIndex((visit) => visit.id===id)
        if(index === -1) {
            res.status(404).json({message: "Booking is not found!"})
        }
        else{
            user.bookedVisits.splice(index, 1)
            await prisma.user.update({
                where: {email: email},
                data: {
                    bookedVisits: user.bookedVisits
                }
            })
            res.send("Booking canceled successfully!")
        }
    }
    catch(err){
        throw new Error(err.message)
    }
});

// CONTROLLER FUNCTION FOR ADDING A RESIDENCY TO THE FAVOURITES OF A USER

export const toFav = asyncHandler(async (req, res) => {
    console.log("Adding a residency to the favourites of a user");
    const {email} = req.body
    const {rid} = req.params
    try {
        const user = await prisma.user.findUnique({
            where: {email: email}
        })
        if(user.FavResidenciesID.includes(rid)) {
            const updateUser = await prisma.user.update({
                where: {email: email},
                data: {
                    FavResidenciesID: {
                        set: user.FavResidenciesID.filter((id) => id !== rid)
                    }
                }
            })
            res.send({message:"Residency removed from favourite!", user: updateUser})
        }
        else {
            const updateUser = await prisma.user.update({
                where: {email: email},
                data: {
                    FavResidenciesID: {
                        push: rid
                    }
                }
            })
            res.send({message:"Residency updated to favourite!", user: updateUser})
        }
    }
    catch(err) {
        throw new Error(err.message)
    }
});

// CONTROLLER FUNCTION FOR GETTING ALL FAVORITES RESIDENCY OF A USER
export const getAllFav = asyncHandler(async (req, res) =>{
    const {email} = req.body
    try {
        const favResd = await prisma.user.findUnique({
            where: {email: email},
            select:{FavResidenciesID: true}
        })
        res.status(200).send(favResd)
    }catch(err) {
        throw new Error(err.message)
    }
})