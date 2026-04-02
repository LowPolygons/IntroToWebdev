document.addEventListener("DOMContentLoaded", on_page_load);

async function get_request(year = "1999") {
    const response_data = await fetch("https://mudfoot.doc.stu.mmu.ac.uk/ash/api/halloffame?year=" + year)
    .then(response => {
        if (!response.ok) {
            // Indicate on the page that it failed to load the data
            throw new Error();
        }
        return response.json();
    });
    return response_data;
}

async function on_page_load() {
    const response_data = await get_request("1999");

    console.log(response_data);

    const year_container = document.getElementById("hall-of-fame-year");
    year_container.innerHTML = response_data.year;

    const content_container = document.getElementById("hall-of-fame-content");

    for (const object of response_data.data) {
        const new_obj = format_band_to_html(object);
        console.log(new_obj);
        content_container.appendChild(new_obj);
    }
}

function format_band_to_html(data) {
    const image_data = data.image;
    const band_data = data.band;
    const inducted_members_data = data.inducted_members;
    const inducted_by_data = data.inducted_by;

    const new_content = document.createElement("content");
    new_content.classList.add("hall-of-fame-container");

    // Requires:
    // - img
    const new_image_info = document.createElement("div");
    new_image_info.classList.add("image-info");
    /**/ const image = document.createElement("img");
    /**/ image.setAttribute("src", image_data.source);
    /**/ image.setAttribute("loading", "lazy");
    /**/ image.setAttribute("alt", image_data.title);
    new_image_info.appendChild(image);
    new_content.appendChild(new_image_info);

    // Requires:
    // - a with class exc-h3 for band title and href to the url
    const new_band_info = document.createElement("div");
    new_band_info.classList.add("band-info");
    /**/ const a_tag = document.createElement("a");
    /**/ a_tag.setAttribute("href", band_data.url);
    /**/ a_tag.classList.add("exc-h3");
    /**/ a_tag.innerHTML = band_data.name;
    new_band_info.appendChild(a_tag);
    new_content.appendChild(new_band_info);

    // Requires:
    // - ul
    // - Requires:
    // -    - a with href of the url and name of the name
    const new_inducted_members = document.createElement("div");
    new_inducted_members.classList.add("inducted-members");
    /**/ const ul_tag = document.createElement("div");
    /**/ ul_tag.classList.add("list-of-inductors");
    /**/ for (const member of inducted_members_data) {
    /**/    const local_a_tag = document.createElement("a")
    /**/    local_a_tag.setAttribute("href", member.url);
    /**/    local_a_tag.classList.add("exc-h3");
    /**/    local_a_tag.innerHTML = member.name;
    /**/    ul_tag.appendChild(local_a_tag);
    /**/ }
    /**/ new_inducted_members.appendChild(ul_tag);
    if (inducted_members_data.length != 0) {
        new_content.appendChild(new_inducted_members);
    }

    // Requires:
    // - a with href of the url and name of the name
    if (Object.keys(inducted_by_data).length != 0 ) {
        const new_inducted_by = document.createElement("div");
        new_inducted_by.classList.add("inducted-by");
        /**/ const inducted_by_a_tag = document.createElement("a");
        /**/ inducted_by_a_tag.setAttribute("href", inducted_by_data.url);
        /**/ inducted_by_a_tag.classList.add("exc-h3");
        /**/ inducted_by_a_tag.innerHTML = inducted_by_data.name;
        new_inducted_by.appendChild(inducted_by_a_tag);
        new_content.appendChild(new_inducted_by);
    }

    return new_content
}