import { useNavigate } from "react-router-dom";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

function NotFound404() {
  const navigate = useNavigate();
  return (
    <div className="error">
      <h1>Page not Found.</h1>
      <div className="flex-md">
        <button className="btn btn--dark" onClick={() => navigate(-1)}>
          <ArrowUturnLeftIcon width={20} />
          <span>Go Back</span>
        </button>
      </div>
    </div>
  );
}

export default NotFound404;
