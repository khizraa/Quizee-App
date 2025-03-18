import { useLocation, useNavigate } from "react-router-dom";

function Result() {
  const location = useLocation(); 
  const params = new URLSearchParams(location.search);
  const score = params.get("score");
  const total = params.get("total");
  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-center">
      <div
      className="mt-6"
        style={{
          width: "600px",
          background: "rgba(223, 208, 234, 0.67)",
          boxShadow: "0px 0px 7px 6px rgba(199, 179, 215, 0.67)",
          borderRadius: "20px",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h1 style={{color:"rgb(76, 40, 87)"}}>Quiz Result</h1>

        {!score || !total ? (
          <p style={{ fontSize: "25px", color: "red" }}>
            No quiz submitted
          </p>
        ) : (
          <p className="text-purple" style={{ fontSize: "25px" }}>
            Your Score: <strong>{score} / {total}</strong>
          </p>
        )}

        <button className="btn bg-purple-blue " onClick={() => navigate("/")}>Go Home</button>
      </div>
    </div>
  );
}

export default Result;
