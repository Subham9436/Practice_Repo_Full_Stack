import { getAllPatients } from "../repo/patient.repo.js"

export const getPatients = () =>{
    return getAllPatients();
}