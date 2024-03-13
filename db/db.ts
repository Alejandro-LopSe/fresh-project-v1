import mongoose from "npm:mongoose";
import { Cliente, Publicacion } from "../types.ts";

if (mongoose.connection.readyState === 0) {
    await mongoose.connect(Deno.env.get("MONGO_URL")!);
}

const schema1 = new mongoose.Schema<Cliente>({
    Name: {type: String, required:true},
    Email: {type: String, required:true},
    Age: {type: Number, required:true},
});

const schema2 = new mongoose.Schema<Publicacion>({
    Titulo: {type: String, required:true},
    Author: {type: String, required:true},
    date: {type: String, required:true},
  });

  export const modelo1 =  mongoose.model<Cliente>("Cliente", schema1);
  export const modelo2 =  mongoose.model<Publicacion>("Publicacion", schema2);