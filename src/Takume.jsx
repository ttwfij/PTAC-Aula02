import "./globalsrc.css"
import {useState} from "react";
export default function Takume(){
    const [nome, setnome] = useState("")
    return(
        <main>
        <div className='main'>
          <h1>Lista tecnica</h1>
        </div>
        <div className="pegatudo">
            <div className="tudodentro">
            <a>Isira seu nome:</a>
            <br/>
            <input name="" id="1" anChange={(event)=> setnome(event.target.value)}/>
            <br/>
            <br/>
            <a>Isira sua idade:</a>
            <br/>
            <input name="" id="2" anChange={(event)=> setnome(event.target.value)}/>
            <br/>
            <br/>
            <a>Isira seu telefone:</a>
            <br/>
            <input name="" id="3" anChange={(event)=> setnome(event.target.value)}/>
            <br/>
            <button className="botao"><h4 className="botaol">Salvar dados</h4></button>
            </div>
            </div>
            <footer className="rodape">
                <h1>Seja bem vindo</h1>
            </footer>
        </main>
    )
}
   <script src="Takume.js"></script>