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
    "onyx" : {
        album_name: "Onyx",
        songs: [
            { name: "Decimate", run_time: "3:46" },
            { name: "Osiris", run_time: "4:08" },
            { name: "Cough Drop", run_time: "3:12" },
            { name: "Back To Back", run_time: "3:18" },
            { name: "Run This", run_time: "3:25" },
            { name: "Plague Doctor", run_time: "4:02" },
            { name: "Demisaur", run_time: "3:36" },
            { name: "Name Drop", run_time: "3:07" },
            { name: "The Last Elder", run_time: "4:41" },
            { name: "Our Fire", run_time: "4:16" },
            { name: "Temporary Blue", run_time: "4:22" },
            { name: "Salvation", run_time: "4:35" },
            { name: "Lockdown", run_time: "3:28" },
            { name: "Fall Apart", run_time: "4:11" }
        ]
    },
    "virus" : {
        album_name: "Virus",
        songs: [
            { name: "Virus", run_time: "3:45" },
            { name: "X Up", run_time: "3:31" },
            { name: "Throwin' Elbows", run_time: "3:42" },
            { name: "Rumble", run_time: "4:42" },
            { name: "Reload", run_time: "3:53" },
            { name: "Home", run_time: "4:02" },
            { name: "With You", run_time: "4:20" },
            { name: "Final Boss", run_time: "3:58" },
            { name: "Neck Brace", run_time: "3:34" },
            { name: "Drop Bombs", run_time: "3:40" },
            { name: "Live Wire", run_time: "4:08" },
            { name: "Before The Sun", run_time: "4:36" },
            { name: "Interlude", run_time: "1:42" },
            { name: "The Paradox", run_time: "4:12" }
        ]
    },
    "x-rated" : {
        album_name: "X Rated",
        songs: [
            { name: "X Rated", run_time: "4:45" },
            { name: "Ohhh Nooo", run_time: "4:28" },
            { name: "Execute", run_time: "4:12" },
            { name: "Get To The Point", run_time: "3:51" },
            { name: "8 Bit Superhero", run_time: "4:03" },
            { name: "Boom", run_time: "4:07" },
            { name: "Subsonic", run_time: "5:10" },
            { name: "Sleepless", run_time: "5:22" },
            { name: "Sexism", run_time: "4:18" },
            { name: "The Underground", run_time: "4:34" },
            { name: "Hydra", run_time: "4:50" },
            { name: "Deviance", run_time: "5:05" }
        ]
    },
    "apex" : {
        album_name: "Apex",

        songs: [
            {
                name: "Exterminate",
                run_time: "3:34"
            },
            {
                name: "1 On 1",
                run_time: "3:19"
            },
            {
                name: "Wake Up",
                run_time: "5:39"
            },
            {
                name: "Tonight",
                run_time: "4:31"
            },
            {
                name: "Gold (Stupid Love)",
                run_time: "4:55"
            },
            {
                name: "Fall",
                run_time: "3:56"
            },
            {
                name: "Home",
                run_time: "3:57"
            },
            {
                name: "Where Are You",
                run_time: "3:05"
            },
            {
                name: "Power",
                run_time: "4:02"
            },
            {
                name: "Vault",
                run_time: "4:57"
            },
            {
                name: "Die For You",
                run_time: "3:59"
            },
            {
                name: "Hoods Up",
                run_time: "4:00"
            },
            {
                name: "Fight Through The Pain",
                run_time: "4:11"
            },
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