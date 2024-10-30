import ProductComponet from "./components/Index"

const App = () => {
  return (
    <div>
      <ProductComponet url={"https://dummyjson.com/products"} limit={"21"} />
    </div>
  )
}

export default App
