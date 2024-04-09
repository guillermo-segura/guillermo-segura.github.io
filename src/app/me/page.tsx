import profilePic from '@/assets/avatar.svg';
import CardFooter from "@/components/Card/CardFooter";
import CardHeader from "@/components/Card/CardHeader";

const classNames = {
  body: 'flex flex-row justify-around p-6',
};

export default function Page() {
  return (
    <>
      <CardHeader
        imgSrc={profilePic}
        header="Welcome to my site! 👋🏽"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum dapibus magna in maximus. Curabitur scelerisque dui vitae neque consectetur feugiat"
      />

      {/* CARD BODY */}
      <div className={classNames.body}>
        <div>
          <p><b>email:</b> email@domain.com</p>
          <p><b>email:</b> email@domain.com</p>
          <p><b>email:</b> email@domain.com</p>
          <p><b>email:</b> email@domain.com</p>
          <p><b>email:</b> email@domain.com</p>
        </div>

        <div>
          <p><b>email:</b> email@domain.com</p>
          <p><b>email:</b> email@domain.com</p>
          <p><b>email:</b> email@domain.com</p>
          <p><b>email:</b> email@domain.com</p>
          <p><b>email:</b> email@domain.com</p>
        </div>
      </div>

      <CardFooter skills traits />
    </>
  );
}