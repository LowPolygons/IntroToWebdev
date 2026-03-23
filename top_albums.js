
  const album_songs = {
      "codename-x": {
        album_name: "Codename X",
        songs: [
        {
            name: "Codename X",
            run_time: "3:21"
        },
        {
            name: "Float Away",
            run_time: "4:02"
        },
        {
            name: "Shadowflame",
            run_time: "4:00"
        },
        {
            name: "Robo Kitty",
            run_time: "4:10"
        },
        {
            name: "Bring the Madness",
            run_time: "3:25"
        },
        {
            name: "Interstellar",
            run_time: "4:03"
        },
        {
            name: "Live Wire",
            run_time: "4:12",
        },
        {
            name: "Out of Time",
            run_time: "3:49"
        },
        {
            name: "X Up",
            run_time: "4:03"
        },
        {
            name: "Push It Up",
            run_time: "3:50"
        },
        {
            name: "Night Shine",
            run_time: "4:21"
        }
      ]
    },
    "apex" : {
        album_name: "Apex",
        songs: [
            {
                name: "Rumble",
                run_time: "4:42"
            }
        ]
    }
  };


function load_popup(album_name) {

  const popup = document.getElementById("selected-album-song-list");
  const chosen_headline = document.getElementById("chosen-album")
  const popup_body = document.getElementById("popup-body-data");

  const popup_body_tables = popup_body.querySelectorAll("table");
  popup_body_tables.forEach(item => item.remove());

  const data = album_songs[album_name];

  if (data !== undefined) {
    const table = get_table_element(["Song Name", "Run Time"]);

    for (const song of data.songs) {
        register_row_to_song_table(table, song);
    }
    console.log(table)

    chosen_headline.innerHTML = data.album_name

    popup_body.appendChild(table)

    popup.style.display = "block"
  }
}

function register_row_to_song_table(table, data) {
    const table_row = document.createElement("tr");
    
    const name = document.createElement("td");
    const run_time = document.createElement("td");

    name.innerHTML = data.name;
    run_time.innerHTML = data.run_time;

    name.classList.add("table-row-text");
    name.classList.add("table-row-song-name");
    name.classList.add("td_or_tr")

    run_time.classList.add("table-row-text");
    run_time.classList.add("table-row-song-runtime");
    run_time.classList.add("td_or_tr")

    table_row.appendChild(name);
    table_row.appendChild(run_time);

    table.appendChild(table_row);

    return table
}

function get_table_element(headers) {
  const table = document.createElement("table");
  const table_header = document.createElement("tr");

  for (const item of headers) {
    const element = document.createElement("th");
    element.classList.add("table-header");
    element.classList.add("td_or_tr")
    element.innerHTML = item;

    table_header.appendChild(element);
  }
  table.appendChild(table_header);

  return table;
}

function close_popup() {
  const popup = document.getElementById("selected-album-song-list");

  popup.style.display = "none"
}