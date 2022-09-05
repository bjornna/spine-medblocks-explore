import Patientdata from "./forms/Patientdata.svelte";

export interface Form {
    name: string;
    id: string;
    component: any;
    opt: string;
}

export const forms: Form[] = [
    {
        name: "Pasientdata",
        id: "patientdata.",
        component: Patientdata,
        opt: "egenvurdering_rygg_v01.opt",
    },
];