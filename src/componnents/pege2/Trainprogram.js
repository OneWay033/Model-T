import { Link } from "react-router-dom";
import AppHeader from "../AppHeader";

export default function Trainprogram() {
  return (
    <>
      <AppHeader />
      <div>
        <nav className="mt-4">
          <div className="ml-4">
            <Link to="/CreateTraining"  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                สร้างตารางเทรน
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
