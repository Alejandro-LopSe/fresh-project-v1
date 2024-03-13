import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Cliente from "../../islands/Cliente.tsx";



export const handler:Handlers = {
    POST: (req: Request, ctx: FreshContext<unknown,{}>)=>{
        return ctx.render()
    }
}

export default function Home(props: PageProps){

    return (
        <div class="centrar">
            <Cliente/>
        </div>
    )
}