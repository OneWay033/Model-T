import Popup from "./Popup";
import AppHeader from "../AppHeader";
import "./Trend_child.css";

const data = [
  { id: 1, name: "John Doe", age: 28, job: "Software Engineer" },
  { id: 2, name: "Jane Smith", age: 34, job: "Graphic Designer" },
  { id: 3, name: "Michael Johnson", age: 25, job: "Data Analyst" },
];

export default function Trend_child(props) {
  return (
    <>
    <AppHeader/>
    <nav>
      <Popup />
      {/* <button type="bitton" href='/Popup' className="nav-Trend_child hover:text-orange-400">Add My Trainee</button>  */}
    </nav>
      <p className="title">My trainee</p>
  
      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Job</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.job}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

            
      {/* <div>Some content here</div>
        <div className="grid-container">
            <div className="grid-item">
                {props.title}
                {props.text}
            </div>
        </div> */}
    </>
  );
}
