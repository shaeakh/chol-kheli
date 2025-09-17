import blankImage from "@/assets/blankUser.png";
const page = () => {
  const user = {
    reg_no: "2020831022",
    name: "John Doe",
    edu_mail: "johndoe@edu.com",
    phone: "123-456-7890",
    department: "Computer Science",
    user_pic_url: "https://example.com/user.jpg",
    password: "H@ck3rP@ssw0rd",
  };
  return (
    <div>
      {/* user details section */}
      <div className="flex flex-row items-center md:flex-col md:items-start gap-4 p-4 border rounded-lg md:w-1/3 min-h-full">
        {/* image */}
        <img
          className="w-1/2 md:w-[300px] h-auto rounded-full"
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
        </div>
      </div>
    </div>
  );
};

export default page;
