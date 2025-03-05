import axios from "axios"
import dayjs from "dayjs"
import { toast } from "react-toastify"


export const api = axios.create({
    baseURL: "http://localhost:3000/api"
})

export const getAllProperties = async() => {
    try {
        const response = await api.get("/residency/allresd", {
            timeout: 10*1000,
        })
        if(response.status === 400 || response.status ===500) {
            throw response.data
        }
        return response.data.reverse()
    }catch(error) {
        toast.error("Something went wrong")
        throw error
    }
}

export const getProperty = async (id) => {
    try {
        const response = await api.get(`/residency/${id}`, {
            timeout: 10*1000,
        })
        if(response.status === 400 || response.status ===500) {
            throw response.data
        }
        return response.data.residency;
    }catch(error) {
        toast.error("Something went wrong")
        throw error
    }
}

export const createUser = async (email, token) => {
    try {
        await api.post("/user/register", {email},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
        )
    }catch(error){
        toast.error("Something went wrong! Please try again")
        throw error
    }
}

export const bookVisit = async (date, propertyId, email, token) => {
    try {
        await api.post(`/user/bookVisit/${propertyId}`, {
                email,
                id: propertyId,
                date: dayjs(date).format("DD/MM/YY"),
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
    } catch (error) {
        console.error("Booking failed:", error);
        toast.error("Something went wrong! Please try again.");
        throw error;
    }
};

export const removeBooking = async (id, email, token) => {
    try {
        await api.post(`/user/removeBooking/${id}`, 
            {email},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
    } catch (error) {
        toast.error("Something went wrong! Please try again.");
        throw error;
    }

}
export const toFav = async (id, email, token) => {
    try {
        await api.post(`/user/toFav/${id}`, 
            {email},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
    } catch (e) {
        throw new e
        
    }

}

export const getAllFav = async (email, token ,next) => {
    if (!email || !token) return []; // Ensure valid email and token

    try {
        const res = await api.post(`/user/allFav`, 
            { email },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return res.data?.favResidenciesID ?? []; // Ensure it returns an array
    } catch (error) {
        toast.error("Something went wrong while fetching your fav list");
        return next(error) // Return empty array instead of throwing error
    }
};

export const getAllBookings = async (email, token) => {

    if (!email || !token) return []; // Ensure valid email and token

    try {
        const res = await api.post(`/user/allBookings`, 
            { email },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return res.data?.bookedVisits ?? []; // Ensure it returns an array
    } catch (error) {
        toast.error("Something went wrong while fetching your booking list");
        throw error; // Return empty array instead of throwing error
    }

}

export const createResidency = async (data, token, userEmail) => {
    const requestData = {...data, userEmail};
    console.log(requestData);

    try {
        const res = await api.post(`/residency/create`, 
            requestData, // pass the updated data object as the request body
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            }
        );
        console.log("Server response:", res.data); 

        return res.data;
    } catch (error) {
        console.error("Error creating residency:", error.response?.data || error.message);
        throw error;
    }
}