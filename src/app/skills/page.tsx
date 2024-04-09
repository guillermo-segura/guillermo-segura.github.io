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
        header="These are my skills 💪🏽"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum dapibus magna in maximus. Curabitur scelerisque dui vitae neque consectetur feugiat"
      />

      {/* CARD BODY */}
      <div className={classNames.body}>
        <div>
          <p><b>Frontend:</b> React</p>
          <p><b>Frontend:</b> React</p>
          <p><b>Frontend:</b> React</p>
          <p><b>Frontend:</b> React</p>
          <p><b>Frontend:</b> React</p>
        </div>

        <div>
          <p><b>Frontend:</b> React</p>
          <p><b>Frontend:</b> React</p>
          <p><b>Frontend:</b> React</p>
          <p><b>Frontend:</b> React</p>
          <p><b>Frontend:</b> React</p>
        </div>

        <div>
          <p><b>Frontend:</b> React</p>
          <p><b>Frontend:</b> React</p>
          <p><b>Frontend:</b> React</p>
          <p><b>Frontend:</b> React</p>
          <p><b>Frontend:</b> React</p>
        </div>
      </div>

      {/* CARD FOOTER */}
      <CardFooter home traits />
    </>
  );
}