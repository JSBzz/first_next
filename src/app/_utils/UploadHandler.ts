import AWS from "aws-sdk";
import { ManagedUpload } from "aws-sdk/clients/s3";

export const uploadHandler = async (file: any) => {
  try {
    let upload: ManagedUpload | null = null;
    AWS.config.update({
      region: process.env.NEXT_PUBLIC_S3_UPLOAD_REGION,
      accessKeyId: process.env.NEXT_PUBLIC_S3_UPLOAD_KEY,
      secretAccessKey: process.env.NEXT_PUBLIC_S3_UPLOAD_SECRET,
    });

    upload = new AWS.S3.ManagedUpload({
      params: {
        ACL: "public-read",
        Bucket: process.env.NEXT_PUBLIC_S3_UPLOAD_BUCKET!,
        Key: `upload/${file?.name!}`,
        Body: file,
      },
    });
    if (upload) {
      const result = await upload.promise().then((res) => res.Location);
      return result;
    }
    return null;
  } catch (err) {
    console.log("err: ", err);
  }
};
