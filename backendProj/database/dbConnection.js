import mongoose from "mongoose"; 

export const dbConnection = ()=>{
    mongoose.connect(process.env.Mongo_URI,{
        dbName: "MERN_STACK_PROJECT_JOB_PORTAL",
    }).then(()=>{
        console.log("connected to database");
    }).catch((err)=>{
        console.log(`some error occured while connecting to database:${err}`);
    });
};
