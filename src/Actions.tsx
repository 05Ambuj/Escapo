"use server"
export const Actions=async(formData:FormData)=>{
    const file=formData.get("file") as File;
    // const desc=formData.get("desc") as string;

}

export default Actions;