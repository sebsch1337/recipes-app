import Image from "next/image";

export default function Veggie() {
  return (
    <>
      <h1>Veggie</h1>
      <Image
        src="/img/pizza.jpg"
        alt="bla"
        layout="responsive"
        width={4256}
        height={2832}
      />
    </>
  );
}
