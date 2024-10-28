import React, { useState, useEffect } from "react";
import "./YoutubeVideos.css";

function YoutubeVideos() {
  const [appleApi, setappleApi] = useState([]);

  useEffect(() => {
    fetch(
      "https:www.googleapis.com/youtube/v3/search?key=AIzaSyDyJkVJUGLOi4Fu8cXSaXHu1gXBrJ4JY3w&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9"
    )
      .then((response) => response.json())
      .then((mydata) => {
        const appleApiData = mydata.items;
        setappleApi(appleApiData);
        console.log(appleApiData);
      });
  }, []);
  console.log(appleApi);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="title-wrapper text-center">
            <h1 className="font-weight-bold">Latest Videos</h1>
          </div>
        </div>
        {appleApi?.map((singleVideo) => {
          console.log(singleVideo);
          let vidId = singleVideo.id.videoId;
          let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
          let videoToDisplay = (
            <div key={vidId} className="col-sm-12 col-md-6 col-lg-4">
              <div className="singleVideoWrapper video-zoomin">
                <div className="videoThumbnail">
                  <div className="">
                    <a href={vidLink} target="_blank">
                      <img src={singleVideo.snippet.thumbnails.high.url} />
                    </a>
                  </div>
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a href={vidLink} target="_blank">
                        {singleVideo.snippet.title}
                      </a>
                    </div>
                    <div className="videoDesc">
                      {singleVideo.snippet.description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
          return videoToDisplay;
        })}
      </div>
    </div>
  );
}

export default YoutubeVideos;
