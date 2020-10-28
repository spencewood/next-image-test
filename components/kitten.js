import Image from "next/image";

const Kitten = () => (
  <Image
    data-testid="kitten"
    src="http://placekitten.com/200/300"
    width={200}
    height={300}
  />
);

export default Kitten;
