export default class Cl_mCliente {
  constructor({ nombre, billete, cambioDe10, cambioDe20, cambioDe50 }) {
    this.nombre = nombre;
    this.billete = billete;
    this.cambioDe50 = cambioDe50;
    this.cambioDe20 = cambioDe20;
    this.cambioDe10 = cambioDe10;
  }
  set billete(billete) {
    this._billete = +billete;
  }
  get billete() {
    return this._billete;
  }
  set cambioDe10(c10) {
    this._cambioDe10 = +c10;
  }
  get cambioDe10() {
    return this._cambioDe10;
  }
  set cambioDe20(c20) {
    this._cambioDe20 = +c20;
  }
  get cambioDe20() {
    return this._cambioDe20;
  }
  set cambioDe50(c50) {
    this._cambioDe50 = +c50;
  }
  get cambioDe50() {
    return this._cambioDe50;
  }
  cantidadDeBilletes() {
    return this.cambioDe10 + this.cambioDe20 + this.cambioDe50;
  }
}
