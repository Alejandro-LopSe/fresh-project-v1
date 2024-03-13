import { FreshContext } from "$fresh/server.ts";

export  const  Layout = async (req: Request,ctx: FreshContext)=>{
    const url = new URL(req.url)
    const pos_actual = url.pathname
    const Component = ctx.Component;
    
    
    
    return(
        <body>
        <div class="menu_cliente">
            {pos_actual!=="/cliente/registrar" && <p><div class="flecha"></div><a href="/cliente/registrar">Registrarse</a></p>}
            {pos_actual!=="/cliente" && <p><div class="flecha"></div><a href="/cliente">Clientes</a></p>}
        </div>
            <Component/>

        </body>
    )
}
export default Layout