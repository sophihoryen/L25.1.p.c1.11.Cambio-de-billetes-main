import Cl_vCliente from "./Cl_vCliente.js";
import Cl_mCliente from "./Cl_mCliente.js";
export default class Cl_vCasa {
  constructor() {
    this.controlador = null;
    this.tabla = document.getElementById("mainForm_tabla");
    this.salida = document.getElementById("salida");
    this.vCliente = new Cl_vCliente();
    this.vCliente.btProcesar.onclick = () => this.controlador.procesarCliente();
  }
  procesarCliente() {
    this.mCliente = new Cl_mCliente({
      nombre: this.vCliente.nombre,
      billete: this.vCliente.billete,
      cambioDe10: this.vCliente.cambioDe10,
      cambioDe20: this.vCliente.cambioDe20,
      cambioDe50: this.vCliente.cambioDe50,
    });
    return this.mCliente;
  }
  reportarCliente(
    montoTotalCambiado,
    quedanDe10,
    quedanDe20,
    quedanDe50,
    quedanDe100
  ) {
    this.tabla.innerHTML += `<tr>
      <td>${this.mCliente.nombre}</td>
      <td>${this.mCliente.billete}</td>
      <td>${this.mCliente.cambioDe10}</td>
      <td>${this.mCliente.cambioDe20}</td>
      <td>${this.mCliente.cambioDe50}</td>
      <td>${this.mCliente.cantidadDeBilletes()}</td>
    </tr>`;
    this.salida.innerHTML = `
    <br>Se cambiaron $${montoTotalCambiado}
    <br>Quedaron ${quedanDe100} de $100
    <br>Quedaron ${quedanDe50} de $50
    <br>Quedaron ${quedanDe20} de $20
    <br>Quedaron ${quedanDe10} de $10
`;
  }
}
