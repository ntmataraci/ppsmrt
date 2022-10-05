// import { listOfFiles, UploadcareSimpleAuthSchema } from '@uploadcare/rest-client';
import {UploadClient} from '@uploadcare/upload-client'
import { ContextProvider } from './Context';

//uploadcare service
const UploadApi  = async(file:File)=> {

//complex rest api
    // const uploadcareSimpleAuthSchema = new UploadcareSimpleAuthSchema({
    //     publicKey: '57db1544742d50736bcb',
    //      secretKey: '2d6d71a0c3594468458f',
    //    });
    // const result = await listOfFiles({}, { authSchema: uploadcareSimpleAuthSchema })
    // console.log(result)

// if(file!=undefined){return}
    const client = new UploadClient({ publicKey: '57db1544742d50736bcb' })
    const data=await client.uploadFile(file)
    const result= await data
    return (result.cdnUrl)

    }

export default UploadApi