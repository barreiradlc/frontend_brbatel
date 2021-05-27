
export async function parseCNPJ(msg: string){
  return msg.replaceAll('/', '').replaceAll('-', '').replaceAll('.', '').replaceAll('_', '')
}