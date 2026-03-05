import CarModal from "../model/carModal.js";
//Add Car
export const addCar = async (req, res) => {
    try{
       const{name,about,year,seats,model,category,fuel,milage,price,transmission,status} = req.body;
       if(!name || !about || !year || !seats || !model || !category || !fuel || !milage || !price){
        return res.status(400).send({
            success:false,
            message:"All fields are required"
        });
       }

       //image val
       if(!req.file){
       return res.status(404).send({success:false,message:'please add image'});
       }
       const photo = req.file.buffer.toString('base64');
       const newCar = await CarModal.create({
        name,
        about,
        year,
        seats,
        model,
        category,
        fuel,
        milage,
        price,
        image:photo,
        transmission,
        status
       });
       res.status(201).send({
           success:true,
           message:"Car added successfully",
           data:newCar
       });
    }catch(error){
        console.error(error);
        res.status(500).send({
            success:false,
            message:"Error in Add car api",
            error
        })
    }
};

//All CARS
export const getAllCars=async(req,res) =>{
    try{
     const cars = await CarModal.find({});
     res.status(200).send({
        success:true,
        message:"All cars fetched successfully",
        totalCar:cars.length,
        cars,
     })
    }catch(error){
         res.status(500).send({
            success:false,
            message:"Error in Add car api",
            error
        })
    }
}

//get car by ID
export const getCarDetails = async(req,res) =>{
    try{
        const id = req.params.id;
        const car = await CarModal.findById(id);
        res.status(200).send({
            success:true,
            message:"Car details fetched successfully",
            car
        })
        if(!car){
            res.status(400).send({
                success:false,
                message:"car not found",
            })
        }
    }catch(error){
        console.error(error);
        res.status(500).send({
            success:false,
            message:"Error in get car details api",
            error  
        })
    }
}

//update
export const updateCar = async(req,res) =>{
    try{
        const carId = req.params.id;
        const data = req.body;
        const updatedCar = await CarModal.findByIdAndUpdate(carId,{$set:data},{returnOriginal:false});
        res.status(200).send({
            success:true,
            message:"Car updated successfully",
            updatedCar
        })
    }catch(error){
       console.error(error);
         res.status(500).send({
             success:false,
            message:"Error in get car details api",
            error 
        })  
    }
}

//delete car
export const deleteCar=async(req,res) =>{
    try{
        const CarId = req.params.id;
        const deletedCar = await CarModal.findByIdAndDelete(CarId);
        res.status(200).send({
            success:true,
            message:"Car deleted successfully",
            deletedCar
        })
    }catch(error){
        console.error(error);
         res.status(500).send({
             success:false,
            message:"Error in delete car api",
            error 
        })  
    }
}