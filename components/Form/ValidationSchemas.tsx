import * as yup from "yup";


export const ValidationSchemas= yup.object({
    nombre: yup
      .string()
      .required("Name is required")
      .matches(/^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/, "Name must contain only letters"),
  
    apellido: yup
      .string()
      .required("Last name is required")
      .matches(/^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/, "Last name must contain only letters"),
  
    email: yup
      .string()
      .required("Email is required")
      .email("Enter a valid email format"),
  });
  
  export const DirectionDataSchema = yup.object({
    direccion: yup.string().required("Address is required"),
  
    ciudad: yup.string().required("City is required"),
  
    provincia: yup.string().required("Province is required"),
  
    codigopostal: yup
      .string()
      .required("Postal code is required")
      .matches(/^([0-9])*$/, "Postal code must contain only numbers"),
  });
  
  export const PaymentDataSchema = yup.object({
    numtarjeta: yup
      .string()
      .required("Card number is required")
      .min(16, "Enter the 16 digits of the card"),
  
    nombretarjeta: yup
      .string()
      .required("Cardholder name is required")
      .matches(
        /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/,
        "Cardholder name must contain only letters"
      ),
  
    fechadeexpiración: yup
      .string()
      .required("Expiration date is required")
      .matches(/^([0-9])*$/, "Date must contain only numbers")
      .min(4, "Enter 4 numbers")
      .max(4, "Enter 4 numbers"),
  
    codigodeseguridad: yup
      .string()
      .required("Security code is required")
      .min(3, "Enter 3 numbers")
      .max(3, "Enter 3 numbers"),
  });