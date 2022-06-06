export class UsuariosPPT {
    nombre:string;
    fecha:Date;
    partidosGanados:number;
    partidosPerdidos:number;

    constructor(){
        this.nombre="";
        this.fecha=new Date();
        this.partidosGanados=0;
        this.partidosPerdidos=0;
    }
    guardarPPT(){
        //Pregunto: Si la matrizJSON no existe en el localStorage 
        if (localStorage.getItem("listadoPPT") === null) 
        {
            //Creo e inicializo la matriz por unica vez
            var listadoUsuariosPPT = [];
        }
        else 
        {
            //Recupero el valor de lamatriz JSON
            listadoUsuariosPPT = JSON.parse(localStorage.getItem("listadoPPT") || "{}");
        }

        //Agrego un nuevo Registro a la matriz
        listadoUsuariosPPT.push(this);

        //Actualizo la listado en el localStorage
        localStorage.setItem('listadoPPT',JSON.stringify(listadoUsuariosPPT));
    }
}
