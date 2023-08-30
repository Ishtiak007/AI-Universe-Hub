const loadData = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/ai/tools");
  const data = await res.json();
  const card = data.data;
  showData(card);
};

const showData = (data) => {
  //   const container = document.getElementById("cards-conatainer");

  const sortButton = document.getElementById("sort-button");
  sortButton.addEventListener("click", () => {
    data.tools.sort(
      (a, b) => new Date(a.published_in) - new Date(b.published_in)
    );
    showCards(data);
  });

  showCards(data);
};

const showCards = (data) => {
  const container = document.getElementById("cards-conatainer");
  container.innerHTML = ""; // Clear the container

  data.tools.forEach((toolData) => {
    const div = document.createElement("div");
    div.className = "card w-96 bg-base-100 shadow-xl h-[500px]";
    div.innerHTML = `
        <div class="card w-96 bg-base-100 shadow-xl h-[500px]">
          <figure class="px-6 pt-6 h-1/2">
            <img src="${toolData.image}" alt="Image Not Found" class="rounded-xl" />
          </figure>
          <div class="card-body items-left text-center h-1/2">
            <h2 class="card-title text-xl">Features</h2>
            <div class="border-b-2 text-left">
              <div class="mb-3">
                <p>1. ${toolData.features[0]}</p>
                <p>2. ${toolData.features[1]}</p>
                <p>3. ${toolData.features[2]}</p>
              </div>
            </div>
            <div class="text-left">
              <h2 class="card-title text-xl mb-5">${toolData.name}</h2>
              <div class="flex justify-between">
                <div class="flex gap-2">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <!-- ... your SVG path ... -->
                    </svg>
                  </div>
                  <div>${toolData.published_in}</div>
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <!-- ... your SVG path ... -->
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

    container.appendChild(div);
  });
};

loadData();
