export default class Cl_vCliente {
  constructor() {
    this.inNombre = document.getElementById("clienteForm_inNombre");
    this.inBillete = document.getElementById("clienteForm_inBillete");
    this.inCambioDe10 = document.getElementById("clienteForm_inCambioDe10");
    this.inCambioDe20 = document.getElementById("clienteForm_inCambioDe20");
    this.inCambioDe50 = document.getElementById("clienteForm_inCambioDe50");
    this.btProcesar = document.getElementById("clienteForm_btProcesar");
  }
  get nombre() {
    return this.inNombre.value;
  }
  get billete() {
    return +this.inBillete.value;
  }
  get cambioDe10() {
    return +this.inCambioDe10.value;
  }
  get cambioDe20() {
    return +this.inCambioDe20.value;
  }
  get cambioDe50() {
    return +this.inCambioDe50.value;
  }
}
