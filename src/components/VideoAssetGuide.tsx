
import React from 'react';

const VideoAssetGuide = () => {
  return (
    <div className="space-y-4 text-sm">
      <section>
        <h3 className="text-lg font-medium mb-2">Step 1: Prepare Your Assets</h3>
        <div className="space-y-2">
          <p>For optimal performance, prepare your video files according to these specifications:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Video Format: MP4 or WebM (MP4 preferred for wide browser compatibility)</li>
            <li>Codec: H.264 for MP4, VP9 for WebM</li>
            <li>Resolution: 1920x1080 (Full HD) or 1280x720 (HD)</li>
            <li>Aspect Ratio: 16:9 (landscape) or 9:16 (vertical for mobile)</li>
            <li>Bitrate: 2-4 Mbps for HD content</li>
            <li>File Size: Keep under 10MB per file when possible</li>
          </ul>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-medium mb-2">Step 2: Upload Your Files</h3>
        <div className="space-y-2">
          <p>Add your videos and images to the project using one of these methods:</p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Public folder:</strong> Place your video files in the <code>/public</code> directory of your project.
              <ul className="list-disc pl-5 mt-1">
                <li>Create a <code>/videos</code> subfolder for organization</li>
                <li>Example path: <code>/public/videos/showreel.mp4</code></li>
              </ul>
            </li>
            <li>
              <strong>Remote hosting:</strong> Upload your videos to a service like Cloudinary, AWS S3, or a CDN and use the URL.
            </li>
          </ol>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-medium mb-2">Step 3: Update the Code</h3>
        <div className="space-y-2">
          <p>Now that your files are available, update the relevant components:</p>
          
          <div className="space-y-3">
            <div>
              <h4 className="font-medium">Hero Video:</h4>
              <p>Open <code>src/components/Hero.tsx</code> and update the featured projects:</p>
              <pre className="bg-gray-900 p-2 rounded mt-1 overflow-x-auto">
                <code>{`const featuredProjects = [
  {
    title: "Your Project Title",
    videoSrc: "/videos/your-video.mp4" // Local path from public folder
  }
];`}</code>
              </pre>
            </div>
            
            <div>
              <h4 className="font-medium">Project Images:</h4>
              <p>Open <code>src/components/FilteredWork.tsx</code> and update the projects array:</p>
              <pre className="bg-gray-900 p-2 rounded mt-1 overflow-x-auto">
                <code>{`{
  id: 1,
  title: "Your Project",
  category: "Category",
  description: "Description text",
  image: "/images/your-image.jpg", // Local path
  // OR
  image: "https://your-cdn.com/images/your-image.jpg", // Remote URL
  filters: ["category1", "category2"]
}`}</code>
              </pre>
            </div>
            
            <div>
              <h4 className="font-medium">Video Carousel:</h4>
              <p>To update the video carousel, edit <code>src/components/VideoCarousel.tsx</code>:</p>
              <pre className="bg-gray-900 p-2 rounded mt-1 overflow-x-auto">
                <code>{`// Replace placeholder images with your videos
const videos = [
  '/videos/video1.mp4',
  '/videos/video2.mp4'
];`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-medium mb-2">Step 4: Testing and Optimization</h3>
        <div className="space-y-2">
          <p>After adding your assets, be sure to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Test the site on different devices to ensure videos load correctly</li>
            <li>Verify that videos autoplay smoothly without causing performance issues</li>
            <li>Consider adding poster images for videos to show while loading</li>
            <li>Monitor site performance and further compress assets if loading times are too long</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default VideoAssetGuide;
