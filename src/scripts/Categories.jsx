import { useNavigate } from "react-router-dom";

const categorylist = [
  {
    name: "Maths",
    description: "all about calculations",
    src: "https://th.bing.com/th/id/R.986fa7beed98bd5395359ba8d898423f?rik=X9O0wNpROZiIYg&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fmath-transparent%2fmath-transparent-2.png&ehk=GrLQJGeBVySHW1kKXRg6qGxrk%2fhYNPKinRWBs26JRsc%3d&risl=&pid=ImgRaw&r=0",
    width: "160px",
  },
  {
    name: "Physics",
    description: "all about calculations",
    src: "https://th.bing.com/th/id/R.1c5446f0a903732ebac646521645bced?rik=S%2bLq9DuZV%2fP6rw&pid=ImgRaw&r=0",
    width: "160px",
  },
  {
    name: "Chemistry",
    description: "all about calculations",
    src: "https://www.pngall.com/wp-content/uploads/10/Laboratory-PNG-Image-HD.png",
    width: "110px",
  },
];

function Categories() {
  return (
    <>
      <div className="text-center fs-1 text-purple mt-5 mb-3">
        <b>Categories</b>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{ width: "1000px" }}
          className="d-flex justify-content-evenly"
        >
          {categorylist.map((item) => (
            <Category
              cname={item.name}
              cdetails={item.description}
              imgsrc={item.src}
              altname={item.name}
              width={item.width}
            />
          ))}
        </div>
      </div>
    </>
  );
}

function Category({ cname, cdetails, imgsrc, altname, width }) {
  const navigate = useNavigate();
  return (
    <div
      className="card"
      style={{ boxShadow: "3px 1px 10px rgba(191, 154, 219, 0.67)" }}
    >
      <img
        src={imgsrc}
        className="card-img-top"
        alt={altname}
        style={{ width: width, marginLeft: "70px", marginTop: "20px" }}
      />

      <div style={{ width: "300px" }} className="card-body">
        <h5 className="card-title fs-3 text-purple">{cname}</h5>
        <p className="card-text fs-5 light-purple">{cdetails}.</p>
        <button
          className="btn bg-purple-blue "
          onClick={() => navigate(`/quiz?category=${cname.toLowerCase()}`)}
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}

export default Categories;
