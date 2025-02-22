export default class Cl_controlador {
  constructor(modelo, vista) {
    this.modelo = modelo;
    this.vista = vista;
  }
  procesarCliente() {
    this.modelo.procesarCliente(this.vista.procesarCliente());
    this.vista.reportarCliente(
      this.modelo.montoTotalCambiado(),
      this.modelo.quedanDe10(),
      this.modelo.quedanDe20(),
      this.modelo.quedanDe50(),
      this.modelo.quedanDe100(),
    );
  }
}
