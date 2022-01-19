
export interface Comentarios{
    "id": number,
    "data": Date,
    "titulo": string,
    "comentario": string,
    "usuario": string,
    "livro": {
        "id": any,
        "nomeDoLivro": string,
        "nomeDoAutor": string,
        "urlDaImagemDoLivro": string
    }
    "nota": number,
}