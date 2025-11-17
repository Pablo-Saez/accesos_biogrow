import AppSectionBase from "./AppSectionBase";
 // cámbialo por tu imagen real

export default function PedidosSection() {
    const pedidosImg = "https://undraw.co/api/illustrations/3d-crop-management.svg";
  return (
    <AppSectionBase
      title="Gestión de Pedidos"
      description="Planifica y gestiona los pedidos de tus filiales de manera eficiente. Visualiza la producción, el despacho y el estado en tiempo real. Optimizado para la trazabilidad agrícola y la coordinación con planta."
      image={pedidosImg}
      colorFrom="#0b3d2e"
      colorTo="#228B22"
      buttonText="Ir a Pedidos"
      buttonLink="https://pedidos.biogrowsystem.com"
      reverse={false}
    />
  );
}