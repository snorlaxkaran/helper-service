import cloudinary, {
  UploadApiErrorResponse,
  UploadApiResponse,
} from "cloudinary";

export const upload = (
  file: string,
  publicId?: string,
  overwrite?: boolean,
  invalidate?: boolean
): Promise<UploadApiErrorResponse | UploadApiResponse | undefined> => {
  return new Promise((resolve) => {
    cloudinary.v2.uploader.upload(
      file,
      {
        publicId,
        overwrite,
        invalidate,
        resource_type: "auto",
      },
      (
        error: UploadApiErrorResponse | undefined,
        result: UploadApiResponse | undefined
      ) => {
        if (error) resolve(error);
        resolve(result);
      }
    );
  });
};

export const videoUpload = (
  file: string,
  publicId?: string,
  overwrite?: boolean,
  invalidate?: boolean
): Promise<UploadApiErrorResponse | UploadApiResponse | undefined> => {
  return new Promise((resolve) => {
    cloudinary.v2.uploader.upload(
      file,
      {
        publicId,
        overwrite,
        invalidate,
        chunk_size: 50000,
        resource_type: "video",
      },
      (
        error: UploadApiErrorResponse | undefined,
        result: UploadApiResponse | undefined
      ) => {
        if (error) resolve(error);
        resolve(result);
      }
    );
  });
};
