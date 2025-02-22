export default class Cl_mCasa {
  constructor(iniciaConDe10, iniciaConDe20, iniciaConDe50) {
    this.iniciaConDe10 = iniciaConDe10;
    this.iniciaConDe20 = iniciaConDe20;
    this.iniciaConDe50 = iniciaConDe50;
    this.acMontoTotalCambiado = 0;
    this.cntCambiosDe10 = 0;
    this.cntCambiosDe20 = 0;
    this.cntCambiosDe50 = 0;
    this.cntBilletesDe100 = 0;
  }
  procesarCliente(cliente) {
    if (cliente.billete === 100) this.cntBilletesDe100++;
    this.cntCambiosDe10 += cliente.cambioDe10;
    this.cntCambiosDe20 += cliente.cambioDe20;
    this.cntCambiosDe50 += cliente.cambioDe50;
    this.acMontoTotalCambiado += cliente.billete;
  }
  montoTotalCambiado() {
    return this.acMontoTotalCambiado;
  }
  quedanDe10() {
    return this.iniciaConDe10 - this.cntCambiosDe10;
  }
  quedanDe20() {
    return this.iniciaConDe20 - this.cntCambiosDe20;
  }
  quedanDe50() {
    return this.iniciaConDe50 - this.cntCambiosDe50;
  }
  quedanDe100(){
    return this.cntBilletesDe100
  }
}
