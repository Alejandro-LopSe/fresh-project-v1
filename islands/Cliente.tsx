import { FunctionComponent } from "preact";
import { useSignal } from "@preact/signals";
import { Registro } from "../components/Registro.tsx";


export const Cliente: FunctionComponent = () => {
    const count = useSignal(3);
    return (
        <>
        CLIENTES</>
    );
};

export default Cliente;
