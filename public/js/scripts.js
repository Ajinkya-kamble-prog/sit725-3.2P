// Builds one Materialize card per plant and adds it to the page
const renderPlants = (plants) => {
  plants.forEach((plant) => {
    const cardHtml =
      '<div class="col s12 m6 l3">' +
        '<div class="card hoverable">' +
          '<div class="card-image waves-effect waves-block waves-light">' +
            '<img class="activator" src="' + plant.image + '" alt="' + plant.name + '">' +
          '</div>' +
          '<div class="card-content">' +
            '<span class="card-title activator grey-text text-darken-4">' + plant.name +
              '<i class="material-icons right">more_vert</i></span>' +
            '<p><i class="material-icons tiny">wb_sunny</i> ' + plant.light + '</p>' +
            '<p><i class="material-icons tiny">opacity</i> ' + plant.water + '</p>' +
          '</div>' +
          '<div class="card-reveal">' +
            '<span class="card-title grey-text text-darken-4">' + plant.name +
              '<i class="material-icons right">close</i></span>' +
            '<p>' + plant.description + '</p>' +
          '</div>' +
        '</div>' +
      '</div>';
    $("#plantCards").append(cardHtml);
  });
};

// Calls our GET REST endpoint and renders the result
const loadPlants = () => {
  $.get("/api/plants", (response) => {
    if (response.statusCode === 200) {
      renderPlants(response.data);
    }
  });
};

// Form submit (client side only for this task)
const handleSuggestion = () => {
  const suggestion = {
    name: $("#plantName").val(),
    light: $("#plantLight").val(),
    water: $("#plantWater").val()
  };
  console.log("Plant suggestion:", suggestion);
  M.toast({ html: "Thanks! " + (suggestion.name || "Your plant") + " was suggested." });
  $("#plantForm")[0].reset();
};

$(document).ready(() => {
  $(".modal").modal();
  $("#submitPlant").click(handleSuggestion);
  loadPlants();
});
