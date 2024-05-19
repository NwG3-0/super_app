"use client";

import { useForm } from "react-hook-form";

const useUploadController = () => {
  const uploadForm = useForm();

  const handleUpload = (data: any) => {};

  return {
    uploadForm,

    handleUpload,
  };
};

export default useUploadController;
