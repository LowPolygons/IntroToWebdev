document.addEventListener("DOMContentLoaded", initialise_top_songs);

function initialise_top_songs() {
  // TODO: Remove this, this is bad for accessability. Just inline it, copy the console.log statement it does
  const top_songs_json = [
      {
          url: "https://www.youtube.com/watch?v=9COJCBMmjY0&list=RD9COJCBMmjY0",
          img: "https://img.youtube.com/vi/9COJCBMmjY0/hqdefault.jpg",
          alt: "Rumble - Excision & Space Laces on Youtube",
          title: "Rumble - Excision & Space Laces"
      },
      {
          url: "https://www.youtube.com/watch?v=SNH4RZAFSAU&list=RDSNH4RZAFSAU",
          img: "https://img.youtube.com/vi/SNH4RZAFSAU/hqdefault.jpg",
          alt: "Decimate - Excision on Youtube",
          title: "Decimate - Excision"
      },
      {
          url: "https://www.youtube.com/watch?v=IWrZ0t185z0&list=RDIWrZ0t185z0",
          img: "https://img.youtube.com/vi/IWrZ0t185z0/hqdefault.jpg",
          alt: "Destroid 10 - Funkhole - Excision & Space Laces on Youtube",
          title: "Destroid 10 - Funkhole - Excision & Space Laces"
      },
      {
        url: "https://www.youtube.com",
        img: "asd.asd ",
        alt: "Lol! ",
        title: "Test "
      }
  ];

  const song_list = document.getElementById("song-list");

  top_songs_json.forEach(data => {
    const new_element = create_new_element(data.url, data.img, data.alt, data.title);
    console.log(new_element);
    song_list.appendChild(create_new_element(data.url, data.img, data.alt, data.title));
  });
}

function create_new_element(url, img, alt, title) {
  const new_container = document.createElement("div");

  new_container.classList.add('song-container');

  // A contains an image and alt text
  const new_a = document.createElement("a");
  new_a.setAttribute('href', url);
  
  const a_img = document.createElement("img");
  a_img.setAttribute('src', img);
  a_img.setAttribute('alt', alt);

  new_a.appendChild(a_img);

  const new_p = document.createElement("p");
  new_p.classList.add('exc-h2');
  new_p.appendChild(document.createTextNode(title));


  new_container.appendChild(new_a);
  new_container.appendChild(new_p);

  return new_container;
}
