import React, { useEffect, useState } from 'react';
import DataRequest from '../../requests/data.js'
import FormRequest from '../../requests/form.js'
import Field from './Field';
import './Form.css'

const Form = (props) => {
  const [values, setValues] = useState([]);
  const [fields, setFields] = useState([]);

  const getData = async () => {
    const res = await DataRequest.get();
    setValues(res.data)
  }

  const getForm = async () => {
    const res = await FormRequest.get();
    setFields(res.fields)
  }

  const buildForm = (data, fields) => {
    return (
      <form >
        {
          data.map((row, i) => (
            row.value.includes('=') ?
            <Field
              value={row.value
                .split("\n")
                .map((data) => {
                  return data.split("=")[1];
                })
                .join(" ")}
              label={fields.find(x => x.id === row.field).label}
              key={i}
            /> :
            <Field
              value={row.value}
              label={fields.find(x => x.id === row.field).label}
              key={i}
            />
          ))
        }
      </form>
    )
  }

  useEffect(() => {
    getData();
    getForm();
  }, []);

  if (values.length === 0 || fields.length === 0) {
    return (
    <div>
      <div className="sk-circle">
        <div className="sk-circle1 sk-child"></div>
        <div className="sk-circle2 sk-child"></div>
        <div className="sk-circle3 sk-child"></div>
        <div className="sk-circle4 sk-child"></div>
        <div className="sk-circle5 sk-child"></div>
        <div className="sk-circle6 sk-child"></div>
        <div className="sk-circle7 sk-child"></div>
        <div className="sk-circle8 sk-child"></div>
        <div className="sk-circle9 sk-child"></div>
        <div className="sk-circle10 sk-child"></div>
        <div className="sk-circle11 sk-child"></div>
        <div className="sk-circle12 sk-child"></div>
      </div>
      <p>Building Form...</p>
    </div>
    );
  };
  
  return (
    <div className="Form">
      <h2>Form Generated</h2>
      {buildForm(values, fields)}
    </div>
  )
}

export default Form;