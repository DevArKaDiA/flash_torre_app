import Genoma from "./Genoma";

export default interface userState{
    genoma?: Genoma, 
    userid?: string,
    stack: Array<string>,
    stackFocus?: string
    jobTime?:string
    paymentAmount?: string
}