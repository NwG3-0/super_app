"use client";

import useUploadController from "../controllers/useUploadController";

const UploadTemplate = () => {
  const { uploadForm, handleUpload } = useUploadController();
  const { register, handleSubmit } = uploadForm;

  return (
    <div>
      <form onSubmit={handleSubmit(handleUpload)}>
        <input type="file" {...register} />
        <button>Upload</button>
      </form>
    </div>
  );
};

export default UploadTemplate;
