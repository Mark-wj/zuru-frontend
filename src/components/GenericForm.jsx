import { useState } from 'react';
import useApi from '../components/useApi.jsx'


const GenericForm = ({ resource, fields, onSubmit }) => {
    const { fetchData, loading, error } = useApi();
    const [formData, setFormData] = useState(
      fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
    );
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (onSubmit) {
        await onSubmit(formData); // Use custom submission logic
      } else {
        await fetchData(`/api/${resource}/`, "POST", formData);
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        {fields.map((field) => (
          <div className="form-control" key={field.name}>
            <label className="label">{field.label}</label>
            {field.type === "textarea" ? (
              <textarea
                name={field.name}
                className="textarea textarea-bordered"
                value={formData[field.name]}
                onChange={handleChange}
                required={field.required}
              />
            ) : (
              <input
                type={field.type}
                name={field.name}
                className="input input-bordered"
                value={formData[field.name]}
                onChange={handleChange}
                required={field.required}
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          className={`btn btn-primary ${loading ? "loading" : ""}`}
        >
          Submit
        </button>
        {error && <p className="text-error">{error}</p>}
      </form>
    );
  };
export default GenericForm