var getMeetupData = function(url, data) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.responseType = 'jsonp';
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        resolve(xhr.response);
      } else {
        reject(status);
      }
    };
    xhr.send();
  });
};

document.addEventListener('DOMContentLoaded', function() {
  // Get upcomming events
  getMeetupData('https://api.meetup.com/IbagueJS/events?callback=data&sign=true&photo-host=public&page=5&desc=true&status=upcoming').then(function (data) {
    console.log(data)
  }).catch(function (err) {
    console.error('Imposible to retrieve data from Meetup', err.statusText)
  })

  // Get past events
  getMeetupData('https://api.meetup.com/IbagueJS/events?desc=true&photo-host=public&page=5&sig_id=58958882&status=past&sig=ed0ea86cdefed016050db8ddc35b7f94fc0490c6').then(function (data) {
    console.log(data)
  }).catch(function (err) {
    console.error('Imposible to retrieve data from Meetup', err.statusText)
  })
}, false)
