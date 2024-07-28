const { useState } = require("react");

export function useForm(initialValues, submitCallback) {
  const [values, setValues] = useState(initialValues);

  //TODO: add support for checkbox
  const changeHandler = () => {
    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e)=>{
    e.preventDefault();

    submitCallback(values);
  }

  return {
    values,
    changeHandler,
    submitHandler 
  };
}
