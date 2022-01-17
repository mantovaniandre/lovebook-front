export interface Cliente{
  "nome": string,
  "sobrenome": string,
  "emailUsuario": string,
  "senhaUsuario": string;
  "sexoUsuario": string,
  "cepUsuario": string,
  "cidadeUsuario": string,
  "estadoUsuario": string,
  "enderecoUsuario": string,
  "numeroEnderecoUsuario": string,
  "complementoEnderecoUsuario": string,
  "numeroCartaoCredito": string,
  "nomeCartaoCredito": string,
  "mesExpiracaoCartaoCredito": string,
  "anoExpiracaoCartaoCredito": string,
  "codigoSegurancaCartaoCredito": string,
  "tipoUsuario": {
    "id": number,
    "nome": string
  }
}
