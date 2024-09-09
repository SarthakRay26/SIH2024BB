import React from "react";
import { FocusCards } from "@/components/ui/focus-cards";

const Gallery = () => {
  

  const photos =  [
    "https://i.pinimg.com/564x/01/bc/aa/01bcaadc478d0d9e59b4f8303fb9135b.jpg",
    "https://i.pinimg.com/736x/ab/94/54/ab9454d874e906ff21c9d0ebe39a9f49.jpg",
    // "https://i.pinimg.com/564x/27/e4/e2/27e4e2b8a283c97eb48c6cfcbe5b72df.jpg",
    "https://i.pinimg.com/564x/71/fa/4e/71fa4ef21d042edbc09199e8209744b8.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmpEBhNSVkUkVXhTibDrcpcdP91YIGm3b5vQ&s",
    "https://indianmuseumkolkata.org/wp-content/uploads/2021/11/museum.png",
    "https://i0.wp.com/traveldreams.live/wp-content/uploads/2021/05/11-4.jpg?w=864&ssl=1",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_yyw2mQOAPEtQ-5xTQRBjuAtRp_Gcwplr9A&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0hl-Ewi-D5Oyw34VFIXcNpY7472Yt5fEQYA&s",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Indian_Museum_Kolkata%2C_Coin_Gallery-Local_and_Tribal_Coin_List.jpg/320px-Indian_Museum_Kolkata%2C_Coin_Gallery-Local_and_Tribal_Coin_List.jpg",
    "https://www.india.com/wp-content/uploads/2022/01/Kolkata-mummy-feature-LBB-4.jpg",
    "https://hindi.holidayrider.com/wp-content/uploads/2021/03/rajat2-ngc-f..jpg",
    "https://www.40kmph.com/wp-content/uploads/2021/12/About-The-Indian-Museum-Kolkata.jpg",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/db/dc/b8/aakriti-art-gallery-kolkata.jpg?w=500&h=500&s=1",
    "https://i.ibb.co/B3s41wh/Museum-Stat.jpg",
    "https://indianmuseumkolkata.org/wp-content/uploads/2023/03/Wish-Fulfilling-Tree.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxhXr8J4zUUNBDo-eONw6jw2KBCTbMHHKLHQ&s",
    "https://indianmuseumkolkata.org/wp-content/uploads/2023/03/AsokanLion-Capital.jpg",
    "https://i.ibb.co/s9sq0gm/MahalMus.jpg"
    // "https://i.ibb.co/B6Qbj1b/IMG20211223140156.jpg",
    
  ];

  
  return (
    <>
      <h1 className="text-2xl md:text-7xl StardosStencil-Regular text-[#FA8603] mt-[25px]">
        Gallery
      </h1>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 mt-[15px]">
      {photos.map((src, index) => (
        <div key={index} className="mb-4 break-inside-avoid">
          <img
            src={src}
            alt={`Masonry item ${index + 1}`}
            className="w-full h-auto rounded-lg"
          />
        </div>
      ))}
    </div>
    </>
  );
};

export default Gallery;
