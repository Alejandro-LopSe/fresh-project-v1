import { FunctionComponent } from "preact";
import { useSignal } from "@preact/signals";
import { Registro } from "../components/Registro.tsx";


export const Resgistrarse: FunctionComponent = () => {
    const count = useSignal(3);
    return (
        <>
        <Registro/>
        </>
    );
};

export default Resgistrarse;
