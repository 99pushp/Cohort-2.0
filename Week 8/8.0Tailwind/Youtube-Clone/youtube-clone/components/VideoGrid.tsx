import { VideoCard } from "./VideoCard"

const VIDEOS = [
    {
      title: "Bug Bounty free course",
      image: "Thumbnail0.jpg",
      thumbImage: "profilepic0.jpg",
      author: "TommyDevoss",
      views: "102k",
      timestamp: "4 days ago"
    },
    {
        title: "Bug Bounty free course",
        image: "Thumbnail0.jpg",
        thumbImage: "profilepic0.jpg",
        author: "TommyDevoss",
        views: "102k",
        timestamp: "4 days ago"
      },
      {
        title: "Bug Bounty free course",
        image: "Thumbnail0.jpg",
        thumbImage: "profilepic0.jpg",
        author: "TommyDevoss",
        views: "102k",
        timestamp: "4 days ago"
      },
      {
        title: "Bug Bounty free course",
        image: "Thumbnail0.jpg",
        thumbImage: "profilepic0.jpg",
        author: "TommyDevoss",
        views: "102k",
        timestamp: "4 days ago"
      },
      {
        title: "Bug Bounty free course",
        image: "Thumbnail0.jpg",
        thumbImage: "profilepic0.jpg",
        author: "TommyDevoss",
        views: "102k",
        timestamp: "4 days ago"
      },
      {
        title: "Bug Bounty free course",
        image: "Thumbnail0.jpg",
        thumbImage: "profilepic0.jpg",
        author: "TommyDevoss",
        views: "102k",
        timestamp: "4 days ago"
      },
      {
        title: "Bug Bounty free course",
        image: "Thumbnail0.jpg",
        thumbImage: "profilepic0.jpg",
        author: "TommyDevoss",
        views: "102k",
        timestamp: "4 days ago"
      },
      {
        title: "Bug Bounty free course",
        image: "Thumbnail0.jpg",
        thumbImage: "profilepic0.jpg",
        author: "TommyDevoss",
        views: "102k",
        timestamp: "4 days ago"
      },
      {
        title: "Bug Bounty free course",
        image: "Thumbnail0.jpg",
        thumbImage: "profilepic0.jpg",
        author: "TommyDevoss",
        views: "102k",
        timestamp: "4 days ago"
      },
      
    // Other video objects...
  ];
  
  export function VideoGrid(){
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map(video => (
          <div key={video.title}> {/* Adding a unique key for each video */}
            <VideoCard
              title={video.title}
              image={video.image}
              thumbImage={video.thumbImage}
              author={video.author}
              views={video.views}
              timestamp={video.timestamp}
            />
          </div>
        ))}
      </div>
    );
  };