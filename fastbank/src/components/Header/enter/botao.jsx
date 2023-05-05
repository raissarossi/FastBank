const Botao = (props) =>{
    return(
        <>
            <button onClick={props.clique} className="w-12 h-10 bg-black text-white">{props.texto}</button>
        </>
    )
}

export default Botao;