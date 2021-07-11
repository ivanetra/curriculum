import Trails from "../profile/Trails";
import Profilestyles from "../../styles/Profile.module.css";
import Link from "next/link";

export default function ProfileDetails({ userData }) {
  // console.log(userData);
  return (
    <div className="bg-white shadow-sm rounded px-4 py-3">
      <div className="flex flex-wrap h-auto">
        <div className={`w-2/5 px-1 h-auto py-1 ${Profilestyles?.min_w_18}`}>
          <div
            className={`rounded p-4 h-full text-gray-700 relative ${Profilestyles?.bg_red_110}`}
          >
            <div className="flex">
              {userData.isThisUserTheCurrentLogined &&<Link href="/settings">
                <a>
                  <img
                    className="absolute top-4 right-4"
                    src="/images/profileedit.svg"
                    alt="edit profile"
                  />{" "}
                </a>
              </Link>}

              {/* picture */}
              <div className="relative">
                <div className="rounded-full h-24 w-24">
                  <img
                    src={userData.avatar}
                    alt="avatar"
                    className="rounded-full h-24 w-24"
                  />
                </div>
                {/* <img
                  className="absolute top-16 left-16"
                  src="/images/duckbadge.svg"
                  alt="duck badge"
                /> */}
              </div>

              {/* details */}
              <div className="px-6">
                <h3 className="mb-1 font-semibold text-lg text-gray-900">
                  {userData.fullName}
                </h3>
                <h3 className="my-1 text-sm font-medium">
                  @{userData.username}
                </h3>
                <div className="flex flex-row my-1">
                  <img
                    className="mr-2"
                    src="/images/smallduck.svg"
                    alt="small duck"
                  />
                  <h3 className="font-semibold text-lg">0</h3>
                </div>
              </div>
            </div>
            {/* description */}
            <div className="mt-3 text-sm">{userData.bio}</div>
          </div>
        </div>
        <Trails />
      </div>
    </div>
  );
}
