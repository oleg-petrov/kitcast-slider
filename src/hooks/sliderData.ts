import { useEffect, useState } from "react";

const mockedData = [
    {
      "id": 1,
      "type": "image",
      "src": "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
      "duration": 5000
    },
    {
      "id": 2,
      "type": "image",
      "src": "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
      "duration": 3000
    },
    {
      "id": 3,
      "type": "image",
      "src": "https://i0.wp.com/picjumbo.com/wp-content/uploads/amazing-stone-path-in-forest-free-image.jpg?w=600&quality=80",
      "duration": 2000
    },
    {
      "id": 4,
      "type": "video",
      "src": "https://www.w3schools.com/html/mov_bbb.mp4",
      "duration": 10000
    },
  ];
const mockedApiCall = new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockedData);
    }, 3000);
});

export default function useSliderData() {
    const [data, setData] = useState(null);

    useEffect(() => {
        (
            async function() {
                try {
                    const response = await mockedApiCall;
                    setData(response);
                } catch(err) {
                    console.log(err);
                }
            }
        )()
    });

    return { data };
}
