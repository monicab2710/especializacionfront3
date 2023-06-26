import * as React from "react";
import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { StepperButtons } from "../StepperButtons";
import { yupResolver } from "@hookform/resolvers/yup";
import {  ValidationSchemas} from "../ValidationSchemas";
import Input from "../Input";


export type PersonalDataFormProps = {
    activeStep: number;
    handleNext: () => void;
    setFormData: (data: any) => void;
    formData: any;
};

export const PersonalDataForm: React.FC<PersonalDataFormProps> = ({ activeStep, handleNext, setFormData, formData }: PersonalDataFormProps) => {

    const { handleSubmit, formState: { errors }, control, } = useForm({
        defaultValues: {
            ...formData
        },
        resolver: yupResolver(ValidationSchemas),
    })

    const onSubmit = (data: any) => {
        setFormData({ ...formData, nombre: data.nombre, apellido: data.apellido, email: data.email })
        handleNext();
    };

    return (
        <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    required
                    label="First Name"
                    control={control}
                    name="nombre"
                    type="text"
                    error={Boolean(errors.nombre)}
                    helperText={`${errors.nombre?.message || ""}`}
                />
                <Input
                    required
                    label="Last Name"
                    control={control}
                    name="apellido"
                    error={Boolean(errors.apellido)}
                    helperText={`${errors.apellido?.message || ""}`}
                />
                <Input
                    required
                    label="Email"
                    control={control}
                    name="email"
                    error={Boolean(errors.email)}
                    helperText={`${errors.email?.message || ""}`}
                />
                <StepperButtons
                    activeStep={activeStep}
                    handleNext={handleSubmit(onSubmit)}
                    handleBack={() => { }}
                />
            </form>
        </Box>
    );
}