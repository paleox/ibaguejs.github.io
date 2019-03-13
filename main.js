// Page Loader
$(document).ready(function () {
  setTimeout(function () {
    $('body').addClass('loaded');
  }, 2000);
});
document.addEventListener('DOMContentLoaded', function() {
  // Get upcomming events
  $.ajax({
    url: "https://api.meetup.com/IbagueJS/events?desc=true&photo-host=public&page=5&sig_id=223811643&status=upcoming&sig=88be441521b1fab5ab1330461aa7a9a0101f86b5",
    jsonp: "callback",
    dataType: "jsonp",
    data: {
      format: "json"
    },
    success: function (result) {
      console.log(result.data)
      var events_upcoming = new Vue({
        el: '#events_upcoming',
        data: {
          events_upcoming: result.data
        }
      })
    },
    fail: function (err) {
      console.error('Imposible to retrieve data from Meetup', err.status)
    }
  });
  //Get past events
  $.ajax({
    url: "https://api.meetup.com/IbagueJS/events?desc=true&photo-host=public&page=5&sig_id=223811643&status=past&sig=92a8e04546d333cb9eef865344831eb1a284ee47",
    jsonp: "callback",
    dataType: "jsonp",
    data: {
      format: "json"
    },
    success: function (result) {
      console.log(result.data)
      var events_past = new Vue({
        el: '#events_past',
        data: { 
          events_past: result.data
        }
      })
    },
    fail: function (err) {
      console.error('Imposible to retrieve data from Meetup', err.status)
    }
  });
  //Get Organizers
  $.ajax({
    url: "https://api.meetup.com/IbagueJS/members?photo-host=public&role=leads&page=20&sig_id=223811643&sig=292d4f45b3d63e0d3f2bf0718f6f50c89a1e7f26",
    jsonp: "callback",
    dataType: "jsonp",
    data: {
      format: "json"
    },
    success: function (result) {
      console.log(result.data)
      var events_past = new Vue({
        el: '#organizers',
        data: {
          organizers: result.data
        }
      })
    },
    fail: function (err) {
      console.error('Imposible to retrieve data from Meetup', err.status)
    }
  });
}, false)


