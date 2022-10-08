import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Empleado from './components/Empleado';

export default function App() {
  return (
    <div className="container-fluid">
      <Carousel></Carousel>
      <Navbar></Navbar>
      <Header title="Sistema de Nómina" subtitle="Cuatro Tales"></Header>
      <Empleado></Empleado>
    </div>
  );
}