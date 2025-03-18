import Categories from "./Categories";
import "../styles/common.css";

function Frontpage() {
  return (
    <>
      <div className="d-flex justify-content-evenly mt-5">
        <div className="w-25 mt-6">
          <h1 className="fs-1 text-purple"> Welcome to Quiz Website</h1>
          <p className="fs-5 text-purple">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
            minima corporis voluptatum aliquam, animi laborum cum temporibus
            rerum, culpa omnis alias voluptate deserunt.
          </p>
        </div>
        <img
          src="https://static.vecteezy.com/system/resources/previews/025/003/259/non_2x/cute-cartoon-girl-student-character-on-transparent-background-generative-ai-png.png"
          alt="student"
          style={{width:"35em"}}
        />
      </div>
      
      <Categories />
    </>
  );
}
export default Frontpage;