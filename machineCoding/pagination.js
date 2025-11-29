
import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const totalRecords = data.length;
  const [currentPage, setCurrentPage] = useState(0);
  const recordPerPage = 2;
  const totalPages = Math.ceil(totalRecords / recordPerPage);
  console.log(totalPages);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        console.log(data);
        if (data) {
          setData(data);
        }
      } catch (error) {}
    }
    fetchData();
  }, []);

  const handlePageChnage = (pageNo) => {
    setCurrentPage(pageNo);
  };

  let startindex = currentPage * recordPerPage;
  const filteredData = () => {
    console.log({ startindex });

    return data?.slice(startindex, startindex + 2);
  };
  return (
    <div className="App">
      <div style={{ marginBottom: "10px" }}>
        {filteredData()?.map((item) => {
          return (
            <div>
              {item.username} {item.id}
            </div>
          );
        })}
      </div>
      <div>
        {[...Array(totalPages)].map((pageNo, index) => {
          return (
            <span
              style={{
                color: "white",
                backgroundColor: currentPage == index ? "blue" : "gold",
                margin: "2px",
                padding: "10px",
                borderRadius: "2px",
              }}
              onClick={() => handlePageChnage(index)}
            >
              {index + 1}
            </span>
          );
        })}
      </div>
    </div>
  );
}
