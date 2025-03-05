import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

// Controller function for creating a residency
export const createResidency = asyncHandler(async (req, res) => {
    

    const requestData = req.body.data || req.body;
    
    if (!requestData) {
        return res.status(400).json({ message: "Invalid request. No data provided." });
    }

    const {title, description, price, address, city, country, image, facilities, userEmail} = requestData;

    if (!userEmail) {
        return res.status(400).json({ message: "User email is required." });
    }

    try {
        const residency = await prisma.residency.create({
            data: {
                title,
                description,
                price,
                address,
                city,
                country,
                image,
                facilities,
                owner: { connect: { email: userEmail}
                }
            }
        })

        console.log("Residency created successfully!");

        res.json({
            message: "Residency created successfully",
            residency: residency
        })
    }
    catch (err) {
        console.error("Error creating residency:", err);

        if (err.code === "P2002") { // Fix lowercase issue
            return res.status(400).json({ message: "A residency with this address already exists." });
        }

        res.status(500).json({ message: err.message });
    }
});

// Controller function for GET ALL Residency
export const getAllResidency = asyncHandler(async (req, res) => {
    const residencies = await prisma.residency.findMany({
        orderBy: {
            createdAt: "desc"
        }
    });
    res.send(residencies);
});

// Controller function for GET a Residency BY ID
export const getResidency = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const residency = await prisma.residency.findUnique({where: {id}});
        res.send({residency});
    }
    catch (err) {
        throw new Error(err.message);
    }
});