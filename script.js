
// Search Loactions
function searchLocations() {
  const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': '4ad6b3622fmsha076c093ee91659p1501b3jsn42b66bc6b6d2',
          'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
      }
  };

  var location = document.getElementById("location").value;

  fetch(`https://booking-com.p.rapidapi.com/v1/hotels/locations?locale=en-gb&name=${location}`, options)
      .then(response => response.json())
      .then(response => {
          console.log(response);
          var htmlstring = "";
          response.forEach((ele) => { 
              htmlstring += `
              <div class="card location-card">
                  <div class="card-header">
                      <b>${ele.name}</b><br>
                      <small>${ele.label}</small>
                  </div>
                  <img src="${ele.image_url}" alt="" class="card-image-top">
                  <div class="card-footer">
                      Latitude: ${ele.latitude} 
                      Longitude: ${ele.longitude}
                      <div>
                          No. of Hotels: ${ele.hotels}
                      </div>
                      <div>
                          Destination Type: ${ele.dest_type}
                      </div>
                  </div>
                  <div>
                    <button type="button">View Location</button>
                  </div>
              </div>
              `;
          });
          document.getElementById("displayresults").innerHTML = htmlstring;
      })
      .catch(err => console.error(err));
}