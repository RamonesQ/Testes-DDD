export class Cliente{
    private id: number;
    private nome: string;
    private enail: string;
    private whatsapp: string;

    public constructor (id: number, nome: string, email: string, whatsapp: string){
        this.id = id;
        this.nome = nome;
        this.enail = email;
        this.whatsapp = whatsapp;
    }
}