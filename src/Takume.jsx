import "./globalsrc.css"
import {useState} from "react";
export default function Takume(){
    const [nome, setnome] = useState("")
    const [idade, setidade] = useState("")
    const [telefone, setele] = useState("")
    return(
        <main>
        <div className='main'>
          <h1>Lista tecnica</h1>
        </div>
        <div className="pegatudo">
            <div className="tudodentro">
            <a>Isira seu nome:</a>
            <br/>
            <input type="text" name="" id="nome" 
            anChange={(event)=> setnome(event.target.value)}/>
            <br/>
            <br/>
            <a>Isira sua idade:</a>
            <br/>
            <input type="text" name="" id="idade"  
            anChange={(event)=> setidade(event.target.value)}/>
            {nome}
            <br/>
            <br/>
            <a>Isira seu telefone:</a>
            <br/>
            <input type="text" name="" id="telefone"  
            anChange={(event)=> setele(event.target.value)}/>
            {idade}
            <br/>
            <button className="botao"><h4 className="botaol">Salvar dados</h4></button>
            {telefone}
            </div>
            </div>
            <footer className="rodape">
            <h1>Seja bem vindo</h1>
            </footer>
        </main>
    )
}
   <script src="Takume.js"></script>