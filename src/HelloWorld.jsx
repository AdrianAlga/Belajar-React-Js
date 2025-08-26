import Button from "./components/Button";

function HelloWorld() {
  const sayHello = () => alert("Halo dari Parent!")
  return (
    <>
      <Button onClick={sayHello} label="Button 1" backgroundColor="red" />
      <Button onClick={sayHello} label="Button 2" backgroundColor="green" />
    </>
  );
}

export default HelloWorld;
