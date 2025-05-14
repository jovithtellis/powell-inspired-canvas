
import React from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { File, FileVideo, Upload, FolderPlus } from 'lucide-react';

const VideoAssetGuide = () => {
  return (
    <div className="bg-black text-white p-6 rounded-xl border border-gray-800">
      <h3 className="text-2xl font-medium mb-4">Adding Your Videos & Assets</h3>
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="step1">
          <AccordionTrigger className="text-left">
            <div className="flex items-center">
              <FolderPlus className="mr-2" size={18} />
              <span>Step 1: Prepare Your Files</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Compress your videos to web-friendly formats (MP4, WebM)</li>
              <li>Recommended video settings:
                <ul className="list-disc pl-6 mt-1">
                  <li>Resolution: 1920×1080 (Full HD) or 1280×720 (HD)</li>
                  <li>Codec: H.264 for MP4</li>
                  <li>Bitrate: 2-5 Mbps for HD content</li>
                  <li>Audio: AAC, 128-256 Kbps</li>
                </ul>
              </li>
              <li>Optimize images to JPG or WebP format under 500KB when possible</li>
            </ol>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="step2">
          <AccordionTrigger className="text-left">
            <div className="flex items-center">
              <Upload className="mr-2" size={18} />
              <span>Step 2: Upload Your Files</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p className="mb-3">If using Lovable's online editor:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Click "Dev Mode" in the top-left corner</li>
              <li>Navigate to the "Files" tab</li>
              <li>Click the "Upload" button and select your files</li>
              <li>Videos and images should be uploaded to the <code>/public</code> directory</li>
            </ol>
            
            <p className="mt-4 mb-3">If working locally with the codebase:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Place video files in the <code>/public/videos</code> directory</li>
              <li>Place image files in the <code>/public/images</code> directory</li>
              <li>If these directories don't exist, create them first</li>
            </ol>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="step3">
          <AccordionTrigger className="text-left">
            <div className="flex items-center">
              <FileVideo className="mr-2" size={18} />
              <span>Step 3: Update the Projects List</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p className="mb-3">To add your videos to the portfolio:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Open <code>src/components/FilteredWork.tsx</code></li>
              <li>Locate the <code>allProjects</code> array</li>
              <li>Add or modify entries with your video/image paths:
                <pre className="bg-gray-900 p-2 rounded mt-2 overflow-x-auto">
{`{
  title: "Your Project Title",
  description: "Brief description of your project",
  category: "Choose from existing categories",
  videoSrc: "/videos/your-video-file.mp4",
  imageSrc: "https://your-image-url.jpg" // or "/images/your-image.jpg"
}`}
                </pre>
              </li>
            </ol>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="step4">
          <AccordionTrigger className="text-left">
            <div className="flex items-center">
              <File className="mr-2" size={18} />
              <span>Step 4: Advanced Customization</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p className="mb-3">To modify other aspects of the site:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Edit hero videos in <code>src/components/Hero.tsx</code></li>
              <li>Update about section content in <code>src/components/About.tsx</code></li>
              <li>Modify contact information in <code>src/components/Contact.tsx</code></li>
              <li>To add new work categories:
                <ol className="list-decimal pl-6 mt-1">
                  <li>Edit <code>categories</code> array in <code>FilteredWork.tsx</code></li>
                  <li>Add the new category to your project entries</li>
                </ol>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <div className="mt-6 p-4 bg-gray-900 rounded border border-gray-700">
        <h4 className="text-lg font-medium mb-2">Video Paths Example</h4>
        <p className="text-sm text-gray-400 mb-2">If your video is located in <code>/public/videos/showreel.mp4</code>, the path should be:</p>
        <code>videoSrc: "/videos/showreel.mp4"</code>
      </div>
    </div>
  );
};

export default VideoAssetGuide;
