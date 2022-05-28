import { Cliente } from "../../../model/Cliente";

export class UseCaseCliente{
    public cadastrar(): void{

    }
    public recuperarPeloId(id:number): any{
        if (id == 1){
        return new Cliente(1, "Ramon", "ramon@gmail.com", "991895632")
        }
        return null;
    }

    public recuperarTodos():any{

    }
}