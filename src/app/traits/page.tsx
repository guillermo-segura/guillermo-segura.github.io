import CardFooter from "@/components/Card/CardFooter";
import CardHeader from "@/components/Card/CardHeader";

const classNames = {
  body: 'flex flex-row justify-around',
  footer: 'flex flex-row space-x-8 mt-4',
};

export default function Page() {
  return (
    <>
      <CardHeader
        header="These are my traits"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum dapibus magna in maximus. Curabitur scelerisque dui vitae neque consectetur feugiat"
      />

      {/* CARD BODY */}
      <div className={classNames.body}>
        <div>
          <p><b>Soft skill: </b>Sociable</p>
          <p><b>Soft skill: </b>Sociable</p>
          <p><b>Soft skill: </b>Sociable</p>
          <p><b>Soft skill: </b>Sociable</p>
          <p><b>Soft skill: </b>Sociable</p>
        </div>

        <div>
          <p><b>Soft skill: </b>Sociable</p>
          <p><b>Soft skill: </b>Sociable</p>
          <p><b>Soft skill: </b>Sociable</p>
          <p><b>Soft skill: </b>Sociable</p>
          <p><b>Soft skill: </b>Sociable</p>
        </div>
      </div>

      <CardFooter home skills />
    </>
  );
}