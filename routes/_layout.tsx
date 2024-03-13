import { FreshContext } from "$fresh/server.ts";

export  const  Layout = async (req: Request,ctx: FreshContext)=>{
    const url = new URL(req.url)
    const pos_actual = url.pathname
    const Component = ctx.Component;
    
    
    return(
        <body>
        <div class="menu">
            {pos_actual!=="/" && <p><a href="/">Home</a></p>}
            { <div class="flecha"></div> && (pos_actual!=="/cliente" && pos_actual!=="/cliente/registrar")&& <p><a href="/cliente">Cliente</a></p>}
        </div>
            <Component/>

        </body>
    )
}
export default Layout