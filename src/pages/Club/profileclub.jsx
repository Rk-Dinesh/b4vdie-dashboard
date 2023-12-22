import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../../components/ui/Icon";
import Card from "../../components/ui/Card";
import axios from "axios";
import MobileLogo from "../../assets/aircraft.png";
import { API } from "../../host";

const ProfileClub = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const club_id = params.get("club_id");

  const [user, setUser] = useState([]);
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const user = await axios.get(`${API}/getclubId?club_id=${club_id}`);
      const userData = user.data.token;
      console.log(userData);
      setUser(userData);
      const Post = await axios.get(`${API}/getclubpostId?club_id=${club_id}`);
      const postData = Post.data.token;
      console.log(postData);
      setPost(postData);
    } catch (error) {
      console.error("Error fetching  data:", error);
    }
  };

  const handleDelete = async (clubpost_id) => {
    try {
      await axios.delete(`${API}/deleteclubpost?clubpost_id=${clubpost_id}`);

      setPost((prevCategories) =>
        prevCategories.filter(
          (category) => category.clubpost_id !== clubpost_id
        )
      );
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  return (
    <div>
      <div className="space-y-5 profile-page">
        {user.map((user, index) => (
          <div
            key={index}
            className="profiel-wrap px-[35px] pb-10 md:pt-[84px] pt-10 rounded-lg bg-white dark:bg-slate-800 lg:flex lg:space-y-0 space-y-6 justify-between items-end relative z-[1]"
            style={{ height: "450px" }}
          >
            <div
              className="absolute left-0 top-0 md:h-[300px] h-[300px] w-full z-[-1] rounded-t-lg"
              style={{
                backgroundImage: `url(${API}/${user.clubcoverimage || ""})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            <div className="profile-box flex-none md:text-start text-center">
              <div className="md:flex items-end md:space-x-6 rtl:space-x-reverse">
                <div className="flex-none">
                  <div className="md:h-[186px] md:w-[186px] h-[140px] w-[140px] md:ml-0 md:mr-0 ml-auto mr-auto md:mb-0 mb-4 rounded-full ring-4 ring-slate-100 relative">
                    <img
                      src={`${API}/${user.clubimage}`}
                      alt=""
                      className="w-full h-full object-cover rounded-full"
                    />
                    <br />
                    <div className="text-xl font-medium text-slate-900 dark:text-slate-200 ">
                      {user?.clubname || "N/A"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-info-500 md:flex md:text-start text-center flex-1 max-w-[640px] md:space-y-0 space-y-4">
              <div className="flex-none">
                <div className=" text-start text-xl font-medium text-slate-900 dark:text-slate-200 mb-[3px]">
                  Description :
                </div>
                <div className="text-base font-light text-slate-600 dark:text-slate-300 font-medium mb-1">
                  <div
                    className="text-base font-light text-slate-600 dark:text-slate-300 font-medium mb-1"
                    style={{ whiteSpace: "pre-wrap" }}
                  >
                    {user?.clubdesc
                      ? user.clubdesc
                          .split(" ")
                          .map((word, index) =>
                            index > 0 && index % 16 === 0
                              ? `\n${word}`
                              : ` ${word}`
                          )
                      : "N/A"}
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-info-500 md:flex md:text-start text-center flex-1 max-w-[170px] md:space-y-0 space-y-4">
              <div className="flex-1">
                <div className="text-base text-slate-900 dark:text-slate-300 font-medium mb-1">
                  {user?.followers ? user.followers.length : 0}
                </div>
                <div className="text-sm text-slate-600 font-light dark:text-slate-300">
                  Followers
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 h-max">
          {post.map((post, indexz) => (
            <Card key={indexz} bodyClass="p-4 rounded-md" className="group ">
              <div className=" bg-white dark:rounded relative h-[420px] flex flex-col justify-center items-center mb-3 rounded-md">
                <div className="h-[330px]">
                  <img
                    className="  h-full w-full   transition-all duration-300 group-hover:scale-105"
                    src={`${API}/${post.clubpostimage}`}
                    alt="Image"
                    //style={{ paddingBottom: '50px' }}
                  />
                </div>
                <div>
                  <div
                    style={{
                      position: "absolute",
                      top: "-15px",
                      left: "-15px",
                    }}
                  >
                    <div className=" flex ">
                      <Icon
                        icon="ion:heart"
                        width="25"
                        className="text-danger-600 "
                      />{" "}
                      <p> {post?.like ? post.like.length : 0}</p>
                    </div>
                  </div>
                  <div
                    style={{ position: "absolute", top: "-5px", right: "10px" }}
                  >
                    <p
                      className="	text-slate-900 dark:text-slate-300 "
                      style={{ fontSize: "13px" }}
                    >
                      Posted On : {post.date || "N/A"}
                    </p>
                  </div>

                  <div
                    className="flex"
                    style={{ position: "absolute", top: "385px", left: "1px" }}
                  >
                    <p style={{ fontSize: "14px", fontWeight: "bold" }}>
                      Description{" "}
                    </p>
                    <p
                      className="	text-slate-900 dark:text-slate-300 "
                      style={{
                        fontSize: "14px",
                        fontFamily: "cursive",
                        width: "250px",
                        marginRight: "10px",
                      }}
                    >
                      : {post.des || "N/A"}
                    </p>
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      bottom: "40px",
                      right: "15px",
                    }}
                  >
                    <button
                      onClick={() => handleDelete(post.clubpost_id)}
                      className="bg-slate-100 text-slate-400  p-2.5  mb-1.5 rounded-full hover:bg-red-200 hover: text-red-600"
                    >
                      <Icon
                        icon="heroicons:trash"
                        className="text-slate-400 dark:text-slate-400 hover:text-danger-600 dark:hover:text-danger-600"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileClub;
