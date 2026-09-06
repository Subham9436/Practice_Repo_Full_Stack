import { getPatients } from "../services/patient.service.js"

export const getAllPatientsController = (c) =>{
    const patients = getPatients();
    return c.json(patients);
}