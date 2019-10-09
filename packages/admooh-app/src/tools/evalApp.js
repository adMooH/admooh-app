export const evalApp = (code) => {
  try
  {
    new Function(code).call();
  }
  catch(err)
  {
    if(err instanceof SyntaxError)
    {
      console.error(`Mensagem(SyntaxError): ${err.message}`);
    }
    else
    {
      console.error(err);
    }
  }
}
export default evalApp;
