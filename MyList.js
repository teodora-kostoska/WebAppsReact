function MyList(props){
    const text = props.items.map((word) =>
    <li key={word.id}>{word.text}</li>)
    return(
        <div>
            <h1>{props.header}</h1>
            <ol>{text}</ol>
        </div>
    )
}
export default MyList