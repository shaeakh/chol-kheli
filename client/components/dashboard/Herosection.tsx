const user = {
  reg_no: "2020831022",
  name: "John Doe",
  edu_mail: "johndoe@edu.com",
  phone: "123-456-7890",
  department: "Computer Science",
  user_pic_url: "@/assets/blankUser.png",
  password: "H@ck3rP@ssw0rd",
};
import blankImage from "@/assets/blankUser.png";
import { Button } from "../ui/button";
const Herosection = () => {
  return (
    <div className="flex flex-row  items-center md:flex-col md:items-start gap-4 p-4 border rounded-lg md:w-1/3 min-h-full">
      <img
        className="border-2 object-cover mx-auto w-1/3 md:w-[300px] h-auto rounded-full p-2"
        src={blankImage.src}
        alt={user.name}
      />
      {/* other texts  */}
      <div>
        <p>Registration No: {user.reg_no}</p>
        <p>Name: {user.name}</p>
        <p>Email: {user.edu_mail}</p>
        <p>Phone: {user.phone}</p>
        <p>Department: {user.department}</p>
        <div className="flex flex-row gap-2 mt-2">
          <Button variant="default">Edit Profile</Button>
          <Button variant="outline">Settings</Button>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
