

export class User{
    
    id:string;
    correo:string;
    clave:string;
    perfil:string;
    sexo:string;
    user:string;;

   
    constructor(pId:string, pCorreo:string, pClave:string, pPerfil:string, pSexo:string){
        this.id = pId;
        this.correo = pCorreo;
        this.perfil = pPerfil;
        this.clave = pClave;
        this.sexo = pSexo;
    }

   

}