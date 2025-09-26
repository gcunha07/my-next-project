import PrimeiroComponente from "./components/PrimeiroComponente"
import ComponenteComProp from "./components/ComponenteComProp"
import ComponenteComVariasProps from "./components/ComponenteComVariasProps"
import ComponenteComCondicional from "./components/ComponenteComCondicional"
import ComponenteComMap from "./components/ComponenteComMap"
import ComponenteComEventos from "./components/ComponenteComEventos"
import ComponenteComState from "./components/ComponenteComState"
import ComponenteComUseEffect from "./components/ComponenteComUseEffect"
import ComponenteComFormik from "./components/ComponenteComFormik"

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-500 flex flex-col items-center justify-center">
      <h1 className="text-7xl font-bold text-white">Hello! </h1>
      <PrimeiroComponente/>
      <ComponenteComProp/>
      <ComponenteComVariasProps/>
      <ComponenteComCondicional/>
      <ComponenteComMap/>
      <ComponenteComEventos/>
      <ComponenteComState/>
      <ComponenteComUseEffect/>
      <ComponenteComFormik/>
    </div>
  )
}