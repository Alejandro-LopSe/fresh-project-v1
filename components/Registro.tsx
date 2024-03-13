import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import { JSX } from "preact";

export const Registro: FunctionComponent = () => {
    const [mostrar_p, setMostrar] = useState<boolean>(false);
    const [p, setp] = useState<string>("");
    const [n, setn] = useState<string>("");
    const [e, sete] = useState<string>("");
    const [error, seterror] = useState<string>("");
    
    

  const tipo = (): string => {
    if (mostrar_p) {
      return "text";
    } else {
      return "password";
    }
  };


  const check = (x: JSX.TargetedEvent<HTMLFormElement, Event>)=>{
        x.preventDefault()
        console.log(x.defaultPrevented);
        let err =""
    if(!p || !e || !n){
        err="2"
        seterror("Faltan datos.")
    }

    if(!err){
        x.currentTarget.submit()
    }

  }
  return (
      <div class="contenido">
        <h1>Registro</h1>
        <form action="/cliente" method="post" onSubmit={(e)=>{check(e)}}>
            
          <p>
          <label>Name:</label>  <input label="name" type="text" name="name" onBlur={(e)=>{setn(e.currentTarget.value)}} />
          </p>
          <p>
          <label>Email:</label><input type="text" name="email" onBlur={(e)=>{sete(e.currentTarget.value)}} />
          </p>
          <p>
            <label>Password: </label> <input type={tipo()} onBlur={(e)=>{setp(e.currentTarget.value)}} name="password" />
        </p>
          <p class={"null"}>
            <input   name="mostrar" type="checkbox" onClick={(e) => {setMostrar(e.currentTarget.checked);}}/>Mostrar contraseña
          </p>
          { error}
          <button type="submit" >Resgistrarse</button>{console.log(e,n,p,error)}
        </form>
      </div>
  );
};
