const Body = ({
  bio,
  name,
  avatarUrl,
  company,
  websiteUrl,
  followers,
  following,
  pullRequests,
  twitterUsername,
}) => {
  return (
    <>
      <div className="bg-[#0f2150] mt-5 flex flex-col p-4 rounded-xl ">
        <div className="flex flex-row justify-between items-center w-full">
          <div className="ml-5 rounded-full">
            <img
              src={avatarUrl}
              alt="Avatar Image"
              className="object-contain w-[150px] h-[150px] rounded-full border-4 border-blue-300"
            />
          </div>

          <div className="mt-5 flex flex-col gap-3 min-w-96 items-end ">
            <h1 className="text-white text-2xl w-full font-bold text-center">
              {" "}
              {name}
            </h1>

            {bio ? (
              <p className="flex max-w-xs  text-gray-400 text-lg font-semibold">
                {bio}
              </p>
            ) : (
              <div className="max-w-xs ">
                <h2 className="text-gray-400 text-lg">Not Available</h2>
              </div>
            )}
          </div>
        </div>

        <div className="mt-7 flex flex-row gap-3">
          <div className="flex flex-col gap-2 w-1/3 font-semibold">
            {company ? (
              <h2 className="text-white text-lg pl-5">Company: {company}</h2>
            ) : (
              <h2 className="text-gray-400 text-lg">Not Available</h2>
            )}

            {twitterUsername ? (
              <h2 className="text-white text-lg pl-5">
                Twitter: {twitterUsername}
              </h2>
            ) : (
              <h2 className="text-gray-400 text-lg">Not Available</h2>
            )}

            {websiteUrl ? (
              <a href={websiteUrl} target="_blank" rel="noreferrer">
                <h2 className="text-white text-lg pl-5 duration-75 ease-in hover:text-blue-600">
                  Website
                </h2>
              </a>
            ) : (
              <h2 className="text-gray-400 text-lg">Not Available</h2>
            )}
          </div>

          <div className="bg-[#21439b] flex flex-row w-2/3 justify-between items-center rounded-lg py-4 px-4 text-white  text-lg font-semibold">
            <div className="flex flex-col justify-between gap-3 items-center">
              Followers <span className="text-xl">{followers}</span>
            </div>
            <div className="flex flex-col justify-between  gap-3 items-center">
              Following <span className="text-xl">{following}</span>
            </div>
            <div className="flex flex-col justify-between  gap-3 items-center">
              Pulls <span className="text-xl">{pullRequests}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
