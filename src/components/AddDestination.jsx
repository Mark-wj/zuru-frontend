import React from "react";
import GenericForm from "../components/GenericForm";

const DestinationForm = () => {
  const fields = [
    { name: "name", label: "Destination Name", type: "text", required: true },
    { name: "location", label: "Location", type: "text", required: true },
    { name: "description", label: "Description", type: "textarea", required: true },
    { name: "image_url", label: "Image URL", type: "url", required: false },
  ];

  return (
    <div className="bg-white shadow-md rounded p-6">
      <h2 className="text-xl font-semibold mb-4">Create Destination</h2>
      <GenericForm resource="destinations" fields={fields} />
    </div>
  );
};

export default DestinationForm;
